import nodemailer from "nodemailer";

const SMTP_TIMEOUT_MS = 20000;
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const env = {
  smtpUser: process.env.SMTP_USER || "",
  smtpPass: process.env.SMTP_PASS || ""
};

const isSmtpConfigured = () => Boolean(env.smtpUser && env.smtpPass);

let transporter;

function createSmtpTransport() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout: SMTP_TIMEOUT_MS,
    socketTimeout: SMTP_TIMEOUT_MS,
    auth: {
      user: env.smtpUser,
      pass: env.smtpPass
    }
  });
}

async function ensureTransporter() {
  if (transporter) return transporter;
  if (!isSmtpConfigured()) return null;
  transporter = createSmtpTransport();
  return transporter;
}

function withTimeout(promise, ms, message) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        const err = new Error(message);
        err.code = "ETIMEDOUT";
        reject(err);
      }, ms);
    })
  ]);
}

function formatMailerError(err) {
  const code = err?.code || "";
  if (code === "EAUTH") {
    return "Gmail rejected the login. Create a new App Password (16 characters, no spaces) and set SMTP_USER / SMTP_PASS on Vercel.";
  }
  if (code === "ETIMEDOUT" || code === "ESOCKET") {
    return "Could not reach Gmail. Try again in a minute.";
  }
  return err?.message || "Failed to send email";
}

async function sendEmail(to, subject, text, html) {
  const activeTransporter = await ensureTransporter();

  if (!activeTransporter) {
    console.warn(`[DRY RUN] EMAIL TO: ${to}`);
    console.warn(`[DRY RUN] SUBJECT: ${subject}`);
    if (subject.includes("OTP")) {
      const otpMatch = text.match(/\d{6}/);
      if (otpMatch) console.warn(`[DRY RUN] OTP: ${otpMatch[0]}`);
    }
    return { messageId: "dry_run" };
  }

  const recipients = Array.isArray(to) ? to.join(", ") : to;

  const info = await withTimeout(
    activeTransporter.sendMail({
      from: `"Blood Bank Cloud" <${env.smtpUser}>`,
      to: recipients,
      subject,
      text,
      html
    }),
    SMTP_TIMEOUT_MS,
    "Email send timed out. Check SMTP_USER and SMTP_PASS on Vercel."
  );

  return info;
}

export async function sendOtpEmail(to, otp) {
  const subject = "Your Registration OTP";
  const text = `Your OTP for Blood Bank Cloud registration is: ${otp}. It expires in 10 minutes.`;
  const html = `<p>Your OTP for Blood Bank Cloud registration is: <strong>${otp}</strong>.</p><p>It expires in 10 minutes.</p><p>If you did not request this, ignore this email.</p>`;

  if (!isSmtpConfigured()) {
    console.warn(`[DRY RUN] OTP for ${to}: ${otp}`);
    const err = new Error("Email is not configured (SMTP_USER / SMTP_PASS missing on server).");
    err.status = 503;
    throw err;
  }

  try {
    const info = await sendEmail(to, subject, text, html);
    console.log("OTP email sent to %s (messageId: %s)", to, info.messageId);
    return { previewUrl: "" };
  } catch (err) {
    console.error("OTP email failed for %s:", to, err.message);
    const wrapped = new Error(formatMailerError(err));
    wrapped.status = err.status || 502;
    throw wrapped;
  }
}

export async function sendAppointmentEmail(to, details) {
  const { hospitalName, type, date } = details;
  const visitType = type === "AT_HOME" ? "Home Collection" : "Hospital Visit";
  const displayDate = date ? new Date(date).toLocaleDateString() : "To Be Confirmed";

  const subject = "Donation Appointment Confirmed";
  const text = `Your ${visitType} appointment has been successfully requested.`;
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #e53e3e;">Thank you for stepping up to donate!</h2>
      <p>Your <strong>${visitType}</strong> appointment has been successfully requested.</p>
      <p><strong>Hospital:</strong> ${hospitalName || "Pending Assignment"}</p>
      <p><strong>Date:</strong> ${displayDate}</p>
    </div>
  `;

  try {
    await sendEmail(to, subject, text, html);
  } catch (err) {
    console.error("Appointment email failed:", err.message);
  }
}

export async function sendSosEmail(toEmails, details) {
  const { hospitalName, bloodGroup, units } = details;
  const subject = `URGENT SOS: ${hospitalName} needs ${bloodGroup} Blood!`;
  const text = `${hospitalName} needs ${units} units of ${bloodGroup} blood.`;
  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #e53e3e;">CRITICAL SOS DISPATCH</h1>
      <p><strong>${hospitalName}</strong> urgently requires <strong>${units} Unit(s)</strong> of <strong>${bloodGroup}</strong> blood.</p>
      <a href="${appUrl}">Open Dashboard</a>
    </div>
  `;

  const recipients = Array.isArray(toEmails) ? toEmails : [toEmails];
  for (const email of recipients) {
    try {
      await sendEmail(email, subject, text, html);
    } catch (err) {
      console.error("SOS email failed for", email, err.message);
    }
  }
}
