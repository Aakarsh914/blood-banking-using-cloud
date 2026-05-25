export function formatApiError(err) {
  const data = err?.response?.data;
  if (data?.error) {
    const hint = data.hint ? ` ${data.hint}` : "";
    return `${data.error}${hint}`;
  }
  if (err?.response?.status === 404) {
    return "Login API not found. Deploy the blood-bank-nextjs app (Root Directory: blood-bank-nextjs), not the old frontend folder.";
  }
  if (err?.code === "ECONNABORTED" || err?.message?.includes("timeout")) {
    return "Request timed out. Check your connection and try again.";
  }
  if (!err?.response) {
    return "Cannot reach the server. Confirm the site is deployed from blood-bank-nextjs and /api/health works.";
  }
  return err?.message || "Login failed";
}
