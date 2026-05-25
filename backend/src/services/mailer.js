import { env } from "../config/env.js";

async function sendResendEmail(to, subject, text, html) {
  if (!env.resendApiKey) {
    console.warn(`\n[DRY RUN] EMAIL DISPATCHED TO: ${to}`);
    console.warn(`[DRY RUN] SUBJECT: ${subject}\n`);
    return { id: "dry_run" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Blood Bank Cloud <onboarding@resend.dev>",
        to: [to],
        subject: subject,
        text: text,
        html: html
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error("Resend API Error:", data);
      throw new Error(data.message || "Failed to send email via Resend");
    }

    console.log("Email successfully sent via Resend to:", to);
    return data;
  } catch (error) {
    console.error("Email Error:", error.message);
    return { id: "failed" };
  }
}

export async function sendOtpEmail(to, otp) {
  const subject = "Your Registration OTP";
  const text = `Your OTP for Blood Bank Cloud registration is: ${otp}. It expires in 10 minutes.`;
  const html = `<p>Your OTP for Blood Bank Cloud registration is: <strong>${otp}</strong>.</p><p>It expires in 10 minutes.</p>`;
  
  const info = await sendResendEmail(to, subject, text, html);
  
  if (info.id === "failed") {
    console.warn(`\n[FALLBACK DRY RUN] OTP CODE IS: ${otp}\n`);
  }
  return { info, previewUrl: "" };
}

export async function sendAppointmentEmail(to, details) {
  const { hospitalName, type, date } = details;
  const visitType = type === 'AT_HOME' ? 'Home Collection' : 'Hospital Visit';
  const displayDate = date ? new Date(date).toLocaleDateString() : 'To Be Confirmed';

  const subject = "Donation Appointment Confirmed";
  const text = `Thank you! Your ${visitType} appointment has been successfully requested.`;
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #e53e3e;">Thank you for stepping up to donate!</h2>
      <p>Your <strong>${visitType}</strong> appointment has been successfully requested.</p>
      <div style="background: #f7fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
         <p style="margin: 5px 0;"><strong>Hospital:</strong> ${hospitalName || 'Pending Assignment'}</p>
         <p style="margin: 5px 0;"><strong>Date:</strong> ${displayDate}</p>
      </div>
      <p>We will notify you once the hospital assigns a precise schedule.</p>
    </div>
  `;

  const info = await sendResendEmail(to, subject, text, html);
  return { info };
}

export async function sendSosEmail(toEmails, details) {
  const { hospitalName, bloodGroup, units } = details;
  
  const subject = `🚨 URGENT SOS: ${hospitalName} needs ${bloodGroup} Blood!`;
  const text = `${hospitalName} needs ${units} units of ${bloodGroup} blood.`;
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #e53e3e; border-radius: 8px; overflow: hidden;">
      <div style="background: #e53e3e; color: white; padding: 20px; text-align: center;">
         <h1 style="margin: 0;">CRITICAL SOS DISPATCH</h1>
      </div>
      <div style="padding: 20px;">
        <p style="font-size: 1.1rem;"><strong>${hospitalName}</strong> has triggered the network alarm.</p>
        <div style="background: #fef2f2; padding: 20px; text-align: center; font-size: 1.4rem; border-radius: 5px; margin: 20px 0; border: 1px solid #fecaca; color: #991b1b;">
           They urgently require <strong>${units} Unit(s)</strong> of <strong>${bloodGroup}</strong> blood.
        </div>
        <p>If you have surplus inventory, please log in to the Central Dashboard immediately to acknowledge and fulfill this request!</p>
        <a href="https://blood-banking-using-cloud-9kjc.vercel.app" style="display: block; width: 100%; text-align: center; background: #e53e3e; color: white; text-decoration: none; padding: 15px 0; border-radius: 5px; font-weight: bold; font-size: 1.1rem; margin-top: 20px;">Open Dashboard</a>
      </div>
    </div>
  `;

  // Resend free tier might block sending to multiple arbitrary emails without a verified domain.
  // We send them individually or just pass the array if allowed.
  const info = await sendResendEmail(toEmails.join(','), subject, text, html);
  return { info };
}
