"use client";

/**
 * Auth calls via fetch (same origin).
 */
async function apiPost(path, body) {
  const res = await fetch(`/api${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    cache: "no-store"
  });

  let data = null;
  const text = await res.text();
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      throw new Error(`Server error (${res.status}). Try again or check /api/setup-check.`);
    }
  }

  if (!res.ok) {
    const hint = data?.hint ? ` ${data.hint}` : "";
    throw new Error((data?.error || `Request failed (HTTP ${res.status})`) + hint);
  }

  return data;
}

export async function loginRequest(email, password) {
  return apiPost("/auth/login", {
    email: String(email).trim().toLowerCase(),
    password: String(password).trim()
  });
}

export async function requestOtpEmail(email) {
  return apiPost("/auth/request-otp", {
    email: String(email).trim().toLowerCase()
  });
}

export async function registerAccount(payload) {
  return apiPost("/auth/register", {
    name: String(payload.name ?? "").trim(),
    email: String(payload.email ?? "").trim().toLowerCase(),
    password: String(payload.password ?? "").trim(),
    role: payload.role,
    otp: String(payload.otp ?? "").trim(),
    hospitalId: payload.hospitalId,
    bloodGroup: payload.bloodGroup
  });
}

export function saveSession(token) {
  localStorage.setItem("token", token);
}
