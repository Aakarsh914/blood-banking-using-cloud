"use client";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import apiClient from "@/services/apiClient";
import { AuthContext } from "@/contexts/AuthContext";
import { supabase } from "@/lib/supabase";
import DonorOnboarding from "@/components/DonorOnboarding";
import DonorDashboard from "@/components/DonorDashboard";
import ReceiverDashboard from "@/components/ReceiverDashboard";

export default function Home() {
  const { user, logout, loading } = useContext(AuthContext);
  const router = useRouter();

  const [localUser, setLocalUser] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [requests, setRequests] = useState([]);
  const [history, setHistory] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState("");
  const [apiStatus, setApiStatus] = useState("Connecting...");
  const [showMenu, setShowMenu] = useState(false);
  const [message, setMessage] = useState("");
  const [showAlerts, setShowAlerts] = useState(false);
  const [requestMessage, setRequestMessage] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [inventoryGroupFilter, setInventoryGroupFilter] = useState("ALL");
  const [requestStatusFilter, setRequestStatusFilter] = useState("ALL");
  const [requestGroupFilter, setRequestGroupFilter] = useState("ALL");
  const [form, setForm] = useState({
    bankId: "",
    bloodGroup: "A+",
    component: "RBC",
    units: 1,
    expiresOn: ""
  });
  const [requestForm, setRequestForm] = useState({
    hospitalId: "",
    bloodGroup: "O+",
    units: 1,
    urgency: "CRITICAL"
  });
  const [showSOS, setShowSOS] = useState(false);
  const [showActivity, setShowActivity] = useState(false);
  const [toast, setToast] = useState(null);
  const [activeView, setActiveView] = useState("OVERVIEW");

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login");
    }
  }, [user, loading, router]);

  useEffect(() => {
    setLocalUser(user);
    if (user?.hospitalId) {
      setForm((f) => ({ ...f, bankId: user.hospitalId }));
      setRequestForm((f) => ({ ...f, hospitalId: user.hospitalId }));
    }
  }, [user]);

  async function loadData() {
    if (!user) return;
    setApiStatus("Connecting...");
    try {
      try {
        await apiClient.get("/health");
      } catch {
        /* optional health ping */
      }
      const labels = ["inventory", "requests", "history", "appointments", "hospitals"];
      const results = await Promise.allSettled([
        apiClient.get("/inventory"),
        apiClient.get("/requests"),
        apiClient.get("/inventory/history"),
        apiClient.get("/appointments"),
        apiClient.get("/hospitals")
      ]);
      const failed = results
        .map((r, i) => (r.status === "rejected" ? labels[i] : null))
        .filter(Boolean);
      if (failed.length > 0) {
        const first = results.find((r) => r.status === "rejected");
        const err = first?.reason;
        const apiErr = err?.response?.data?.error;
        const hint = err?.response?.data?.hint;
        throw Object.assign(err || new Error("API error"), {
          response: err?.response,
          message: apiErr
            ? `Failed: ${failed.join(", ")} — ${apiErr}${hint ? ` (${hint})` : ""}`
            : `Failed to load: ${failed.join(", ")}`
        });
      }
      const [inventoryRes, requestsRes, historyRes, appointmentsRes, hospitalsRes] = results.map(
        (r) => r.value
      );
      setInventory(inventoryRes.data);
      setRequests(requestsRes.data);
      setHistory(historyRes.data);
      setAppointments(appointmentsRes.data);
      setHospitals(hospitalsRes.data);
      setError("");
      setApiStatus("Connected");
    } catch (e) {
      if (e.response?.status === 401) {
        setError("Session expired. Redirecting to login…");
        logout();
        return;
      }
      if (e.code === "ECONNABORTED") {
        setError("Server is waking up. Wait a moment, then refresh the page.");
      } else if (!e.response) {
        setError("Cannot reach the API. Check your connection and try again.");
      } else {
        setError(e.response?.data?.error || "Could not load dashboard data.");
      }
      setApiStatus("Disconnected");
    }
  }

  useEffect(() => {
    if (!user) return;

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
    if (!supabaseUrl || !supabaseKey || supabaseUrl.includes("dummy")) {
      return undefined;
    }

    let channel;
    try {
      channel = supabase
        .channel("public:blood_requests")
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "blood_requests" }, (payload) => {
          const data = payload.new;
          if (data.urgency === "CRITICAL") {
            setToast({
              type: "SOS_ALERT",
              message: `🚨 CRITICAL SOS: New request for ${data.units} Units of ${data.bloodGroup} urgently!`,
              requestId: data.id,
              requesterId: data.requesterId
            });
            loadData();
            setTimeout(() => setToast(null), 15000);
          }
        })
        .subscribe();
    } catch (err) {
      console.warn("Supabase realtime disabled:", err);
      return undefined;
    }

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, [user]);

  useEffect(() => {
    if (user) loadData();
  }, [user]);

  if (loading || !user) {
    return <div className="app-container" style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  const downloadRecordsCSV = () => {
    const header = ["Type,ID,Details,Status,Date"];
    const rows = [];
    requests.forEach(r => rows.push(`Request,${r.id},${r.blood_group} ${r.units} Units,${r.status},${r.created_at}`));
    inventory.forEach(r => rows.push(`Inventory,${r.id},${r.blood_group} ${r.component} ${r.units} Units,,${r.created_at}`));
    appointments.forEach(r => rows.push(`Appointment,${r.id},${r.donor_name} ${r.donor_blood_group},${r.status},${r.scheduled_date || ''}`));
    const csvContent = "data:text/csv;charset=utf-8," + header.concat(rows).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "hospital_records.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  async function handleAcknowledgeSOS(requestId) {
    try {
      await apiClient.post(`/requests/${requestId}/respond`);
      setToast(null);
      setStatusMessage("Response successfully broadcasted!");
    } catch (err) {
      setStatusMessage("Failed to broadcast response.");
    }
  }

  if (['DONOR', 'RECEIVER'].includes(localUser?.role) && !localUser.aadharNumber) {
    return (
      <div className="app-container">
        <div className="header">
          <h1 className="header-title">Onboarding</h1>
          <button className="btn btn-primary" onClick={logout} style={{padding: '0.4rem 1rem'}}>Logout</button>
        </div>
        <DonorOnboarding onComplete={(updated) => setLocalUser(updated)} />
      </div>
    );
  }

  if (localUser?.role === 'DONOR' && localUser.aadharNumber) {
    return <DonorDashboard />;
  }

  if (localUser?.role === 'RECEIVER' && localUser.aadharNumber) {
    return <ReceiverDashboard />;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("");
    try {
      await apiClient.post("/inventory", {
        bankId: Number(form.bankId),
        bloodGroup: form.bloodGroup,
        component: form.component,
        units: Number(form.units),
        expiresOn: form.expiresOn
      });
      setMessage("Inventory added successfully.");
      await loadData();
    } catch (submitError) {
      setMessage("Failed to add inventory. Check input values or permissions.");
    }
  }

  async function handleRequestSubmit(e) {
    e.preventDefault();
    setRequestMessage("");
    try {
      await apiClient.post("/requests", {
        hospitalId: Number(requestForm.hospitalId),
        bloodGroup: requestForm.bloodGroup,
        units: Number(requestForm.units),
        urgency: requestForm.urgency
      });
      setRequestMessage("Blood request added successfully.");
      await loadData();
    } catch (submitError) {
      setRequestMessage("Failed to add request. Check input values or permissions.");
    }
  }

  async function handleStatusChange(requestId, nextStatus) {
    setStatusMessage("");
    try {
      await apiClient.patch(`/requests/${requestId}/status`, { status: nextStatus });
      setStatusMessage(`Request #${requestId} updated to ${nextStatus}.`);
      await loadData();
    } catch (statusError) {
      setStatusMessage("Failed to update request status. Check permissions.");
    }
  }

  async function handleAppointmentStatusChange(appointmentId, nextStatus) {
    setStatusMessage("");
    try {
      await apiClient.patch(`/appointments/${appointmentId}/status`, { status: nextStatus });
      setStatusMessage(`Appointment #${appointmentId} updated to ${nextStatus}.`);
      await loadData();
    } catch (statusError) {
      setStatusMessage("Failed to update appointment status. Check permissions.");
    }
  }

  const filteredInventory = inventory.filter((item) =>
    inventoryGroupFilter === "ALL" ? true : item.blood_group === inventoryGroupFilter
  );

  const filteredRequests = requests.filter((item) => {
    const statusOk = requestStatusFilter === "ALL" ? true : item.status === requestStatusFilter;
    const groupOk = requestGroupFilter === "ALL" ? true : item.blood_group === requestGroupFilter;
    return statusOk && groupOk;
  });

  const totalUnits = inventory.reduce((sum, item) => sum + Number(item.units || 0), 0);
  const lowStockCount = inventory.filter((item) => Number(item.units || 0) < 10).length;
  const pendingRequestCount = requests.filter((item) => item.status === "PENDING").length;
  const approvedRequestCount = requests.filter((item) => item.status === "APPROVED").length;
  const fulfilledRequestCount = requests.filter((item) => item.status === "FULFILLED").length;

  let alertsLowStock = [];
  let alertsExpired = [];
  let alertsExpiringSoon = [];
  
  const today = new Date();
  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(today.getDate() + 3);

  const stockTotals = {};

  inventory.forEach(item => {
    const units = Number(item.units || 0);
    const expiry = new Date(item.expires_on);
    const bankLabel = item.bank_name || `Bank #${item.bank_id}`;

    if (expiry < today) {
      alertsExpired.push(`Expired: ${units} units of ${item.blood_group} ${item.component} at ${bankLabel} expired on ${expiry.toLocaleDateString()}!`);
    } else if (expiry <= threeDaysFromNow) {
      alertsExpiringSoon.push(`Expiring Soon: ${units} units of ${item.blood_group} ${item.component} at ${bankLabel} will expire on ${expiry.toLocaleDateString()}.`);
    }

    // Only count usable (non-expired) units for stock totals
    if (expiry >= today) {
      const stockKey = `${bankLabel}_${item.blood_group}_${item.component}`;
      if (!stockTotals[stockKey]) {
        stockTotals[stockKey] = { bankLabel, group: item.blood_group, component: item.component, units: 0 };
      }
      stockTotals[stockKey].units += units;
    }
  });

  Object.values(stockTotals).forEach(stock => {
     if (stock.units > 0 && stock.units < 10) {
       alertsLowStock.push(`Low Stock: ${stock.bankLabel} has only ${stock.units} combined units of ${stock.group} ${stock.component}.`);
     }
  });

  // Remove exact string duplicate alerts if any
  alertsExpired = Array.from(new Set(alertsExpired));
  alertsExpiringSoon = Array.from(new Set(alertsExpiringSoon));
  alertsLowStock = Array.from(new Set(alertsLowStock));

  const bloodGroupsList = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const groupedInventory = bloodGroupsList.reduce((acc, bg) => {
    acc[bg] = inventory.filter(item => item.blood_group === bg).reduce((sum, item) => sum + Number(item.units || 0), 0);
    return acc;
  }, {});

  return (
    <div className="app-container">
      {/* Toast Notification Layer */}
      {toast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: toast.type === 'SOS_RESPONSE' ? 'var(--primary)' : toast.type === 'NEW_APPOINTMENT' ? 'var(--accent-color)' : 'var(--danger)',
          color: 'white',
          padding: '1.5rem',
          borderRadius: 'var(--radius-lg)',
          boxShadow: `0 10px 25px ${toast.type === 'SOS_RESPONSE' ? 'rgba(16, 185, 129, 0.4)' : toast.type === 'NEW_APPOINTMENT' ? 'rgba(59, 130, 246, 0.4)' : 'rgba(239, 68, 68, 0.4)'}`,
          zIndex: 9999,
          maxWidth: '400px',
          animation: 'slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 'bold' }}>
            {toast.type === 'SOS_RESPONSE' ? 'Help is on the way!' : toast.type === 'NEW_APPOINTMENT' ? 'Donor Engagement' : 'Emergency Broadcast'}
          </h3>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>{toast.message}</p>
          
          {toast.type === 'SOS_ALERT' && user?.role === 'HOSPITAL' && user.hospitalId !== toast.requesterId && (
            <button 
              onClick={() => handleAcknowledgeSOS(toast.requestId)}
              style={{
                marginTop: '10px',
                padding: '0.6rem 1rem',
                border: 'none',
                borderRadius: 'var(--radius-md)',
                background: 'white',
                color: 'var(--danger)',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              🙋‍♂️ I Have It!
            </button>
          )}

          <button 
            onClick={() => setToast(null)}
            style={{ position: 'absolute', top: '10px', right: '10px', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.2rem' }}
          >✕</button>
        </div>
      )}

      <div className="header" style={{ position: "relative" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ position: "relative" }}>
            <button 
              className="btn" 
              style={{ padding: "0.5rem", background: "transparent", border: "1px solid var(--border-color)", fontSize: "1.2rem", cursor: "pointer" }}
              onClick={() => setShowMenu(!showMenu)}
            >
              ☰
            </button>
            {showMenu && (
              <div style={{ 
                position: "absolute", top: "100%", left: 0, marginTop: "0.5rem", background: "var(--bg-primary)", 
                border: "1px solid var(--border-color)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-md)", 
                zIndex: 10, minWidth: "250px", overflow: "hidden" 
              }}>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'OVERVIEW' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('OVERVIEW'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'OVERVIEW' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  📊 Dashboard Overview
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'UNITS_BY_BLOOD_GROUP' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('UNITS_BY_BLOOD_GROUP'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'UNITS_BY_BLOOD_GROUP' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  🩸 Units By Blood Group
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'CURRENT_INVENTORY' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('CURRENT_INVENTORY'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'CURRENT_INVENTORY' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  🩸 Current Inventory
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'INVENTORY_ACTIVITY' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('INVENTORY_ACTIVITY'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'INVENTORY_ACTIVITY' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  ⏱️ Inventory Activity
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'INCOMING_REQUESTS' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('INCOMING_REQUESTS'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'INCOMING_REQUESTS' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  🚨 Incoming Blood Requests
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: activeView === 'DONOR_APPOINTMENTS' ? 'var(--bg-secondary)' : 'transparent', border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={() => { setActiveView('DONOR_APPOINTMENTS'); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = activeView === 'DONOR_APPOINTMENTS' ? 'var(--bg-secondary)' : 'transparent'}
                >
                  📅 Donor Appointments
                </button>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", fontSize: "0.9rem", borderTop: "1px solid var(--border-color)" }}
                  onClick={() => { downloadRecordsCSV(); setShowMenu(false); }}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                  📥 Save All Records (CSV)
                </button>
              </div>
            )}
          </div>
          <h1 className="header-title">Blood Banking Dashboard</h1>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="api-status">
            <span className={`status-dot ${apiStatus === 'Connected' ? 'connected' : 'disconnected'}`}></span>
            {apiStatus}
          </div>
          <div style={{color: 'var(--text-secondary)'}}>
            Welcome, <strong>{user?.name}</strong> <span className="badge badge-blood">{user?.role}</span>
          </div>
          <button className="btn btn-primary" onClick={logout} style={{padding: '0.4rem 1rem', fontSize: '0.875rem'}}>Logout</button>
          <a href="/?debug=1" className="debug-link">Diagnostics</a>
        </div>
      </div>

      {error ? <div className="alert alert-error">{error}</div> : null}

      {!['DONOR', 'RECEIVER'].includes(user?.role) && (alertsExpired.length > 0 || alertsExpiringSoon.length > 0 || alertsLowStock.length > 0) && (
        <div className="card mb-3" style={{border: '1px solid var(--danger)', padding: '0.75rem'}}>
          <div 
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" }}
            onClick={() => setShowAlerts(!showAlerts)}
          >
            <h3 style={{margin: 0, color: "var(--danger)", display: "flex", alignItems: "center", gap: "6px", fontSize: "1rem"}}>
               ⚠️ System Alerts ({alertsExpired.length + alertsExpiringSoon.length + alertsLowStock.length})
            </h3>
            <button className="btn" style={{padding: '0.2rem 0.5rem', fontSize: '0.8rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'}}>
              {showAlerts ? "Hide Alerts ▲" : "View Alerts ▼"}
            </button>
          </div>

          {showAlerts && (
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.5rem", marginTop: "1rem", animation: "fadeIn 0.3s ease-out"}}>
              <div style={{background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '6px', borderLeft: '3px solid var(--danger)'}}>
                 <div style={{fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--danger)', marginBottom: '4px'}}>Expired ({alertsExpired.length})</div>
                 {alertsExpired.length === 0 ? <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>None.</span> : (
                   <ul style={{paddingLeft: '1rem', margin: 0, fontSize: '0.75rem', color: 'var(--danger)'}}>
                     {alertsExpired.map((msg, i) => <li key={i} style={{marginBottom: '2px'}}>{msg}</li>)}
                   </ul>
                 )}
              </div>

              <div style={{background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '6px', borderLeft: '3px solid var(--warning)'}}>
                 <div style={{fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--warning)', marginBottom: '4px'}}>Expiring Soon ({alertsExpiringSoon.length})</div>
                 {alertsExpiringSoon.length === 0 ? <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>None.</span> : (
                   <ul style={{paddingLeft: '1rem', margin: 0, fontSize: '0.75rem', color: 'var(--warning)'}}>
                     {alertsExpiringSoon.map((msg, i) => <li key={i} style={{marginBottom: '2px'}}>{msg}</li>)}
                   </ul>
                 )}
              </div>

              <div style={{background: 'var(--bg-primary)', padding: '0.5rem', borderRadius: '6px', borderLeft: '3px solid var(--accent-color)'}}>
                 <div style={{fontSize: '0.85rem', fontWeight: 'bold', color: 'var(--accent-color)', marginBottom: '4px'}}>Low Stock ({alertsLowStock.length})</div>
                 {alertsLowStock.length === 0 ? <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)'}}>None.</span> : (
                   <ul style={{paddingLeft: '1rem', margin: 0, fontSize: '0.75rem', color: 'var(--accent-color)'}}>
                     {alertsLowStock.map((msg, i) => <li key={i} style={{marginBottom: '2px'}}>{msg}</li>)}
                   </ul>
                 )}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-title">Total Units</div>
          <div className="stat-value">{totalUnits}</div>
        </div>
        <div className="stat-card">
          <div className="stat-title">Low Stock (&lt;10)</div>
          <div className="stat-value" style={{color: lowStockCount > 0 ? 'var(--warning)' : 'var(--success)'}}>{lowStockCount}</div>
        </div>

      </div>

      {activeView === 'OVERVIEW' && (
      <div className="dashboard-grid">
        {/* Inventory Column */}
          {!['DONOR', 'RECEIVER'].includes(user?.role) && (
            <div className="card block-add-inventory">
              <h2>Add Inventory</h2>
              {message ? <div className="alert alert-success mb-4">{message}</div> : null}
              <form onSubmit={handleSubmit}>
                <div className="form-row mb-4">
                  {user?.role === "ADMIN" && (
                    <div className="form-group">
                      <label>Select Hospital / Bank</label>
                      <select className="select" value={form.bankId} onChange={(e) => setForm({ ...form, bankId: e.target.value })} required>
                        <option value="">Select a hospital...</option>
                        {hospitals.map(h => (
                          <option key={h.id} value={h.id}>{h.name}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="form-group">
                    <label>Blood Group</label>
                    <select className="select" value={form.bloodGroup} onChange={(e) => setForm({ ...form, bloodGroup: e.target.value })}>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-row mb-4">
                  <div className="form-group">
                    <label>Component</label>
                    <select className="select" value={form.component} onChange={(e) => setForm({ ...form, component: e.target.value })}>
                      {["RBC", "Plasma", "Platelets"].map((component) => (
                        <option key={component} value={component}>{component}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Units</label>
                    <input className="input" type="number" min="1" placeholder="Units" value={form.units} onChange={(e) => setForm({ ...form, units: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input className="input" type="date" value={form.expiresOn} onChange={(e) => setForm({ ...form, expiresOn: e.target.value })} required />
                  </div>
                </div>
                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">Add to Inventory</button>
                </div>
              </form>
            </div>
          )}


        {/* Requests Column */}
          {!['DONOR', 'RECEIVER'].includes(user?.role) && (
            <div className="card block-sos" style={{ border: showSOS ? '2px solid var(--danger)' : 'none', transition: 'all 0.3s ease' }}>
              {!showSOS ? (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <button 
                    className="heartbeat"
                    onClick={() => { setShowSOS(true); setRequestForm({...requestForm, urgency: 'CRITICAL'}); }}
                    style={{
                       background: 'var(--danger)', color: 'white', borderRadius: '50%',
                       width: '120px', height: '120px', fontSize: '1.75rem', fontWeight: 'bold',
                       border: 'none', cursor: 'pointer',
                       transition: 'transform 0.2s ease'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  >
                    SOS
                  </button>
                  <h3 style={{ marginTop: '1.5rem', color: 'var(--danger)' }}>Declare Blood Emergency</h3>
                </div>
              ) : (
                <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                  <div className="flex items-center justify-between mb-4">
                    <h2 style={{ color: 'var(--danger)', margin: 0 }}>🚨 SOS Emergency Request</h2>
                    <button className="btn" onClick={() => setShowSOS(false)} style={{ background: 'var(--bg-secondary)' }}>Cancel</button>
                  </div>
                  {requestMessage ? <div className="alert mb-4 alert-success">{requestMessage}</div> : null}
                  <form onSubmit={(e) => { handleRequestSubmit(e); setShowSOS(false); }}>
                    <div className="form-row mb-4">
                      {user?.role === "ADMIN" && (
                        <div className="form-group">
                          <label>Select Hospital</label>
                          <select className="select" value={requestForm.hospitalId} onChange={(e) => setRequestForm({ ...requestForm, hospitalId: e.target.value })} required>
                            <option value="">Select a hospital...</option>
                            {hospitals.map(h => (
                              <option key={h.id} value={h.id}>{h.name}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      <div className="form-group">
                        <label>Blood Type Needed</label>
                        <select className="select" value={requestForm.bloodGroup} onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}>
                          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                            <option key={group} value={group}>{group}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="form-row mb-4">
                      <div className="form-group">
                        <label>Units Required Urgently</label>
                        <input className="input" type="number" min="1" value={requestForm.units} onChange={(e) => setRequestForm({ ...requestForm, units: e.target.value })} required />
                      </div>
                    </div>
                    <div className="form-actions">
                      <button className="btn btn-primary" type="submit" style={{ background: 'var(--danger)', width: '100%', fontSize: '1.1rem' }}>🚨 BROADCAST SOS ALERT</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}
      </div>
      )}

      {activeView === 'UNITS_BY_BLOOD_GROUP' && (
          <div className="card mt-4 block-units-group">
            <h2 style={{margin: 0, marginBottom: '1rem'}}>Units By Blood Group</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(60px, 1fr))', gap: '1rem'}}>
              {bloodGroupsList.map(bg => (
                <div key={bg} style={{background: 'var(--bg-primary)', border: '1px solid var(--border-color)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center'}}>
                  <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--danger)'}}>{bg}</div>
                  <div style={{fontSize: '1rem', marginTop: '0.25rem', fontWeight: 600}}>{groupedInventory[bg]} <span style={{fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 400}}>Units</span></div>
                </div>
              ))}
            </div>
          </div>
      )}

      {activeView === 'CURRENT_INVENTORY' && (
          <div className="card mt-4">
            <div className="flex items-center justify-between mb-4">
              <h2 style={{margin: 0}}>Current Inventory</h2>
              <select className="select" style={{width: 'auto', padding: '0.5rem'}} value={inventoryGroupFilter} onChange={(e) => setInventoryGroupFilter(e.target.value)}>
                {["ALL", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                  <option key={group} value={group}>Group: {group}</option>
                ))}
              </select>
            </div>
            
            {filteredInventory.length === 0 ? (
              <p>No inventory found for the selected filter.</p>
            ) : (
              <ul className="list-container">
                {filteredInventory.map((item) => (
                  <li key={item.id} className="list-item">
                    <div className="list-item-content">
                      <div className="list-item-title">{item.bank_name || `Bank #${item.bank_id}`}</div>
                      <div className="list-item-subtitle">{item.component} • Expires {new Date(item.expires_on || Date.now()).toLocaleDateString()}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="badge badge-blood">{item.blood_group}</span>
                      <span style={{fontWeight: 600}}>{item.units} Units</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
      )}

      {activeView === 'INVENTORY_ACTIVITY' && !['DONOR', 'RECEIVER'].includes(user?.role) && (
            <div className="card mt-4 block-inventory-activity" style={{ padding: '1rem 1.5rem' }}>
              <div 
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer", userSelect: "none" }}
                onClick={() => setShowActivity(!showActivity)}
              >
                <h2 style={{margin: 0, display: "flex", alignItems: "center", gap: "8px", fontSize: "1.25rem"}}>
                  ⏱️ Inventory Activity
                </h2>
                <button className="btn" style={{padding: '0.3rem 0.6rem', fontSize: '0.85rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)'}}>
                  {showActivity ? "Hide Activity ▲" : "View Activity ▼"}
                </button>
              </div>

              {showActivity && (
                <div style={{ marginTop: "1.25rem", animation: "fadeIn 0.3s ease-out" }}>
                  {history.length === 0 ? (
                    <p style={{ color: 'var(--text-secondary)' }}>No recent activity found.</p>
                  ) : (
                    <ul className="list-container">
                      {history.map((record) => (
                        <li key={record.id} className="list-item">
                          <div className="list-item-content">
                            <div className="list-item-title">{record.user_name} ({record.user_role})</div>
                            <div className="list-item-subtitle">{new Date(record.created_at).toLocaleString()} • Added to {record.bank_name || `Bank #${record.bank_id}`}</div>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="badge badge-blood">{record.blood_group}</span>
                            <span style={{fontWeight: 600}}>+{record.units} {record.component}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          )}
      {activeView === 'INCOMING_REQUESTS' && !['DONOR', 'RECEIVER'].includes(user?.role) && (
        <div className="card mt-4 block-incoming-requests">
          <h2 style={{margin: 0, marginBottom: '1rem'}}>Incoming Blood Requests</h2>
          {filteredRequests.length === 0 ? (
            <p>No active requests.</p>
          ) : (
            <ul className="list-container">
              {filteredRequests.map((req) => {
                const targetHospital = hospitals.find(h => h.id === req.hospital_id);
                return (
                <li key={req.id} className="list-item" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <div className="flex justify-between" style={{width: '100%'}}>
                    <div className="list-item-content">
                      <div className="list-item-title">
                        Request #{req.id} • <span className="badge badge-blood">{req.blood_group}</span>
                      </div>
                      <div className="list-item-subtitle">
                        {req.units} Units • Urgency: {req.urgency}
                        {targetHospital && ` • Hospital: ${targetHospital.name}`}
                      </div>
                      {req.token && (
                        <div style={{ fontSize: "0.85rem", marginTop: "0.5rem", background: "var(--bg-secondary)", padding: "0.3rem", borderRadius: "4px", border: "1px solid var(--border-color)", display: "inline-block" }}>
                          Token: <strong style={{ color: "var(--primary)" }}>{req.token}</strong>
                        </div>
                      )}
                    </div>
                    <div className="flex" style={{flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', textAlign: 'right'}}>
                       <span className={`badge badge-status-${req.status}`}>{req.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between" style={{width: '100%', borderTop: '1px dashed var(--border-color)', paddingTop: '0.75rem'}}>
                    <span style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>Update status:</span>
                    <select 
                      className="select select-status"
                      value={req.status}
                      onChange={(e) => handleStatusChange(req.id, e.target.value)}
                    >
                      {["PENDING", "APPROVED", "REJECTED", "FULFILLED"].map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </li>
              )})}
            </ul>
          )}
        </div>
      )}

      {activeView === 'DONOR_APPOINTMENTS' && !['DONOR', 'RECEIVER'].includes(user?.role) && (
        <div className="card mt-4">
          <h2 style={{margin: 0, marginBottom: '1rem'}}>Donor Appointments</h2>
          {appointments.length === 0 ? (
            <p>No active donor appointments.</p>
          ) : (
            <ul className="list-container">
              {appointments.map((appt) => {
                const targetHospital = hospitals.find(h => h.id === appt.hospital_id);
                return (
                <li key={appt.id} className="list-item" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                  <div className="flex justify-between" style={{width: '100%'}}>
                    <div className="list-item-content">
                      <div className="list-item-title">{appt.donor_name} • <span className="badge badge-blood">{appt.donor_blood_group}</span></div>
                      <div className="list-item-subtitle">
                        {appt.donation_type === 'AT_HOME' ? '🚗 Home Collection' : '🏥 Hospital Visit'} 
                        {appt.scheduled_date ? ` • Scheduled: ${new Date(appt.scheduled_date).toLocaleDateString()}` : ''}
                        {targetHospital && ` • Hospital: ${targetHospital.name}`}
                      </div>
                    </div>
                    <div className="flex" style={{flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem', textAlign: 'right'}}>
                       <span className={`badge badge-status-${appt.status}`}>{appt.status}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between" style={{width: '100%', borderTop: '1px dashed var(--border-color)', paddingTop: '0.75rem'}}>
                    <span style={{fontSize: '0.875rem', color: 'var(--text-secondary)'}}>Update status:</span>
                    <select 
                      className="select select-status"
                      value={appt.status}
                      onChange={(e) => handleAppointmentStatusChange(appt.id, e.target.value)}
                    >
                      {["PENDING", "APPROVED", "REJECTED", "COMPLETED"].map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>
                </li>
              )})}
            </ul>
          )}
        </div>
      )}

    </div>
  );
}
