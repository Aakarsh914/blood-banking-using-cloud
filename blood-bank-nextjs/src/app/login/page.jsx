"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginContent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (searchParams.get("session") === "expired") {
      setError("Your session expired. Please log in again.");
    }
  }, [searchParams]);

  const fillHospitalDemo = () => {
    setEmail("admin_gmc@test.com");
    setPassword("hospital");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      localStorage.removeItem("token");
      const trimmedEmail = email.trim().toLowerCase();
      const trimmedPassword = password.trim();

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmedEmail, password: trimmedPassword }),
        cache: "no-store"
      });

      const text = await res.text();
      let data = null;
      if (text) {
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error(`Server error (${res.status}). Open /api/setup-check in a new tab.`);
        }
      }

      if (!res.ok) {
        const hint = data?.hint ? ` ${data.hint}` : "";
        throw new Error((data?.error || `Login failed (HTTP ${res.status})`) + hint);
      }
      if (!data?.token) {
        throw new Error("Login succeeded but no token was returned.");
      }

      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } catch (err) {
      setError(err?.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="app-container" style={{ maxWidth: "1200px" }}>
      <div className="login-split">
        <div className="login-image-section">
          <img src="/blood_donation_hero.png" alt="Blood Donation Concept" className="login-img" />
          <div className="login-brand-text">
            <h2 style={{ color: "white", marginBottom: "0.5rem" }}>Blood Bank Cloud</h2>
            <p style={{ color: "#fca5a5", maxWidth: "300px", margin: "0 auto" }}>
              Connecting heroes to patients globally in real-time.
            </p>
          </div>
        </div>

        <div className="login-form-section">
          <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Welcome Back</h1>
          <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "32px" }}>
            Sign in to your account to continue
          </p>

          {error && (
            <div className="alert alert-error" style={{ animation: "fadeIn 0.3s" }}>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%", margin: "0 auto" }}>
            <div className="form-group mb-4">
              <label>Email Address</label>
              <input
                className="input input-animated"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-4">
              <label>Password</label>
              <input
                className="input input-animated"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </div>
            <button
              className="btn btn-primary btn-animated"
              type="submit"
              disabled={submitting}
              style={{ width: "100%", marginBottom: "24px", padding: "1rem" }}
            >
              {submitting ? "Logging in…" : "Log In securely"}
            </button>
            <div style={{ textAlign: "center", fontSize: "0.875rem", color: "var(--text-secondary)" }}>
              Don&apos;t have an account?{" "}
              <Link href="/register" style={{ color: "var(--accent-color)", textDecoration: "none", fontWeight: 600 }}>
                Register now
              </Link>
            </div>
          </form>

          <div
            className="alert"
            style={{
              maxWidth: "400px",
              width: "100%",
              margin: "24px auto 0",
              fontSize: "0.85rem",
              lineHeight: 1.6,
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-secondary)"
            }}
          >
            <strong style={{ color: "var(--text-primary)" }}>Hospital demo login</strong>
            <p style={{ margin: "8px 0 0" }}>
              Email: <code>admin_gmc@test.com</code>
              <br />
              Password: <code>hospital</code> (not your Supabase password)
            </p>
            <button
              type="button"
              className="btn"
              onClick={fillHospitalDemo}
              style={{ marginTop: "12px", width: "100%", border: "1px solid var(--border-color)" }}
            >
              Fill GMC hospital login
            </button>
            <p style={{ marginTop: "12px", fontSize: "0.8rem" }}>
              <a href="/api/setup-check" target="_blank" rel="noreferrer">
                Check database status
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Login() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
