"use client";
import { useState } from "react";
import Link from "next/link";

async function postJson(path, body) {
  const res = await fetch(`/api${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store"
  });
  const text = await res.text();
  let data = null;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Server error (${res.status}).`);
    }
  }
  if (!res.ok) {
    const hint = data?.hint ? ` ${data.hint}` : "";
    throw new Error((data?.error || `Request failed (HTTP ${res.status})`) + hint);
  }
  return data;
}

export default function Register() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "DONOR",
    hospitalId: "",
    bloodGroup: "",
    otp: ""
  });
  const [error, setError] = useState("");
  const [otpHint, setOtpHint] = useState("");
  const [busy, setBusy] = useState(false);

  const sendOtp = async () => {
    setError("");
    setOtpHint("");
    setBusy(true);
    try {
      const email = form.email.trim().toLowerCase();
      if (!email) throw new Error("Email is required");
      setForm((f) => ({ ...f, email }));
      await postJson("/auth/request-otp", { email });
      setStep(2);
      setOtpHint("Check your inbox and spam folder. OTP expires in 10 minutes.");
    } catch (err) {
      setError(err.message || "Failed to request OTP.");
    } finally {
      setBusy(false);
    }
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    await sendOtp();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await postJson("/auth/register", {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password.trim(),
        role: form.role,
        otp: form.otp.trim(),
        hospitalId: form.role === "HOSPITAL" ? Number(form.hospitalId) : undefined,
        bloodGroup: form.role === "DONOR" || form.role === "RECEIVER" ? form.bloodGroup : undefined
      });
      window.location.href = "/login?registered=1";
    } catch (err) {
      setError(err.message || "Registration failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="app-container" style={{ maxWidth: "500px" }}>
      <div className="card">
        <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
          CREATE ACCOUNT {form.role === "RECEIVER" ? "AS RECEIVER" : "AS DONOR"}
        </h1>
        {error && <div className="alert alert-error mb-4">{error}</div>}

        {step === 1 ? (
          <form onSubmit={handleRequestOtp}>
            <div className="form-group mb-4">
              <label>Register As</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="DONOR"
                    checked={form.role === "DONOR"}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  />
                  Donor
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="role"
                    value="RECEIVER"
                    checked={form.role === "RECEIVER"}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                  />
                  Receiver
                </label>
              </div>
            </div>

            <div className="form-group mb-4">
              <label>Full Name</label>
              <input
                className="input"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>

            <div className="form-group mb-4">
              <label>Email Address</label>
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group mb-4">
              <label>Password</label>
              <input
                className="input"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                autoComplete="new-password"
              />
            </div>

            {["DONOR", "RECEIVER"].includes(form.role) && (
              <div className="form-group mb-4">
                <label>Blood Group</label>
                <select
                  className="select"
                  value={form.bloodGroup}
                  onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}
                  required
                >
                  <option value="">Select...</option>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              className="btn btn-primary"
              type="submit"
              style={{ width: "100%", marginBottom: "16px" }}
              disabled={busy}
            >
              {busy ? "Sending OTP..." : "Continue (Send OTP)"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleRegister}>
            <div className="alert alert-success mb-4 text-center">
              An OTP has been sent to <strong>{form.email}</strong>.
              {otpHint && (
                <p style={{ marginTop: "8px", marginBottom: 0, fontSize: "0.875rem" }}>{otpHint}</p>
              )}
            </div>
            <div className="form-group mb-4">
              <label>Enter 6-digit OTP</label>
              <input
                className="input"
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={form.otp}
                onChange={(e) => setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })}
                required
                style={{ textAlign: "center", fontSize: "1.5rem", letterSpacing: "4px" }}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="btn"
                style={{ flex: 1, backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                onClick={() => setStep(1)}
                disabled={busy}
              >
                Back
              </button>
              <button
                type="button"
                className="btn"
                style={{ flex: 1, backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)" }}
                onClick={sendOtp}
                disabled={busy}
              >
                Resend OTP
              </button>
              <button className="btn btn-primary" type="submit" style={{ flex: 2 }} disabled={busy}>
                {busy ? "Saving…" : "Complete Registration"}
              </button>
            </div>
          </form>
        )}

        <div style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--text-secondary)", marginTop: "16px" }}>
          Already have an account?{" "}
          <Link href="/login" style={{ color: "var(--accent-color)", textDecoration: "none" }}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
