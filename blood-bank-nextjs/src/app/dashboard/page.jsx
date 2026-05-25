"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/");
  }, [router]);
  return <div className="app-container" style={{ textAlign: "center", marginTop: "50px" }}>Redirecting...</div>;
}
