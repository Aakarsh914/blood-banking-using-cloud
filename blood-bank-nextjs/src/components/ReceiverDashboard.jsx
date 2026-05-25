"use client";
import { useState, useEffect, useContext, useRef } from "react";
import apiClient from "@/services/apiClient";
import { AuthContext } from "@/contexts/AuthContext";
import { calculateDistance } from "@/utils/distance";

export default function ReceiverDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [hospitals, setHospitals] = useState([]);
  const [myRequests, setMyRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [hospitalSearch, setHospitalSearch] = useState("");

  const [requestForm, setRequestForm] = useState({
    hospitalId: "",
    bloodGroup: user?.bloodGroup || "A+",
    units: 1,
    urgency: "NORMAL"
  });
  const [showMenu, setShowMenu] = useState(false);

  const downloadCSV = () => {
    const header = ["ID,Hospital_ID,Blood_Group,Units,Urgency,Status,Token,Created_At"];
    const rows = myRequests.map(r => 
      `${r.id},${r.hospital_id},${r.blood_group},${r.units},${r.urgency},${r.status},${r.token || ''},${r.created_at}`
    );
    const csvContent = "data:text/csv;charset=utf-8," + header.concat(rows).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_blood_requests.csv");
    document.body.appendChild(link);
    link.click();
    link.remove();
    setShowMenu(false);
  };

  const loadData = async () => {
    if (!user) return;
    try {
      try {
        await apiClient.get("/health");
      } catch {
        /* wake Render if sleeping */
      }
      const [hospRes, reqRes] = await Promise.all([
        apiClient.get("/hospitals"),
        apiClient.get("/requests")
      ]);
      setHospitals(hospRes.data);
      setMyRequests(reqRes.data);
      setError("");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else if (err.code === "ECONNABORTED") {
        setError("Server is waking up. Wait a minute and refresh.");
      } else {
        setError(err.response?.data?.error || "Failed to load data.");
      }
    } finally {
      setLoading(false);
    }
  };

  const hospitalsWithDistance = hospitals.map(h => {
    let dist = null;
    if (user?.latitude && user?.longitude && h.latitude && h.longitude) {
      dist = calculateDistance(user.latitude, user.longitude, h.latitude, h.longitude);
    }
    return { ...h, distance: dist };
  }).sort((a, b) => {
    if (a.distance === null && b.distance === null) return 0;
    if (a.distance === null) return 1;
    if (b.distance === null) return -1;
    return a.distance - b.distance;
  });

  useEffect(() => {
    if (user) loadData();
  }, [user]);

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (!requestForm.hospitalId) {
      setError("Please select a hospital.");
      return;
    }
    try {
      await apiClient.post("/requests", {
        hospitalId: Number(requestForm.hospitalId),
        bloodGroup: requestForm.bloodGroup,
        units: Number(requestForm.units),
        urgency: requestForm.urgency
      });
      setMessage("Blood request submitted successfully.");
      setRequestForm({
        ...requestForm,
        units: 1,
        urgency: "NORMAL"
      });
      loadData();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to submit request.");
    }
  };

  if (loading) return <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>Loading Receiver Portal...</div>;

  return (
    <div className="app-container">
      <div className="header" style={{ marginBottom: "2rem", position: "relative" }}>
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
                zIndex: 10, minWidth: "150px", overflow: "hidden" 
              }}>
                <button 
                  style={{ width: "100%", padding: "0.75rem 1rem", textAlign: "left", background: "transparent", border: "none", cursor: "pointer", fontSize: "0.9rem" }}
                  onClick={downloadCSV}
                  onMouseOver={(e) => e.target.style.background = 'var(--bg-secondary)'}
                  onMouseOut={(e) => e.target.style.background = 'transparent'}
                >
                  📥 Save Records (CSV)
                </button>
              </div>
            )}
          </div>
          <h1 className="header-title" style={{ color: "var(--danger)", margin: 0 }}>Receiver Portal</h1>
        </div>
        <div className="flex items-center gap-4 flex-wrap">
          <div style={{ color: 'var(--text-secondary)' }}>
            Welcome back, <strong>{user?.name}</strong> <span className="badge badge-blood">{user?.bloodGroup}</span>
          </div>
          <button className="btn btn-primary" onClick={logout} style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Logout</button>
        </div>
      </div>

      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?auto=format&fit=crop&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '3rem 2rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '2.5rem',
        textAlign: 'center',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
        }}>
          Request the Blood You Need
        </h2>
        <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Submit a direct request to a verified hospital.
        </p>
      </div>

      {error && <div className="alert alert-error">{error}</div>}
      {message && <div className="alert alert-success">{message}</div>}

      <div className="grid-2">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Request Blood</h2>
          <form onSubmit={handleRequestSubmit}>
            <div className="form-group mb-4">
              <label>Select Target Hospital</label>
              <input 
                type="text" 
                className="input mb-2" 
                placeholder="🔍 Search hospital..." 
                value={hospitalSearch} 
                onChange={(e) => setHospitalSearch(e.target.value)} 
              />
              <select 
                className="select" 
                value={requestForm.hospitalId} 
                onChange={(e) => setRequestForm({ ...requestForm, hospitalId: e.target.value })} 
                required
              >
                <option value="">Select a hospital...</option>
                {hospitalsWithDistance
                  .filter(h => h.name.toLowerCase().includes(hospitalSearch.toLowerCase()) || h.city.toLowerCase().includes(hospitalSearch.toLowerCase()))
                  .map(h => (
                  <option key={h.id} value={h.id}>{h.name} ({h.city}) {h.distance !== null ? `(${h.distance.toFixed(1)} km away)` : ''}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-4">
              <label>Blood Group Needed</label>
              <select 
                className="select" 
                value={requestForm.bloodGroup} 
                onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}
              >
                {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
            </div>
            <div className="form-group mb-4">
              <label>Units Required</label>
              <input 
                className="input" 
                type="number" 
                min="1" 
                value={requestForm.units} 
                onChange={(e) => setRequestForm({ ...requestForm, units: e.target.value })} 
                required 
              />
            </div>
            <div className="form-group mb-4">
              <label>Urgency Level</label>
              <select 
                className="select" 
                value={requestForm.urgency} 
                onChange={(e) => setRequestForm({ ...requestForm, urgency: e.target.value })}
              >
                <option value="NORMAL">Normal</option>
                <option value="HIGH">High</option>
                <option value="CRITICAL">Critical (SOS)</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit Request</button>
          </form>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>My Requests</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Track the status of your submitted blood requests.</p>
          {myRequests.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", border: "1px dashed var(--border-color)", borderRadius: "8px", color: "var(--text-secondary)" }}>
              You have no active requests.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {myRequests.map(req => {
                const hospital = hospitals.find(h => h.id === req.hospital_id);
                return (
                  <div key={req.id} style={{ border: "1px solid var(--border-color)", padding: "1rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{hospital ? hospital.name : `Hospital #${req.hospital_id}`}</h3>
                      <span className={`badge badge-status-${req.status}`}>{req.status}</span>
                    </div>
                    <div style={{ fontSize: "0.9rem" }}>
                      <strong>{req.units} Units</strong> of <span className="badge badge-blood">{req.blood_group}</span>
                    </div>
                    {req.token && (
                      <div style={{ fontSize: "0.9rem", marginTop: "0.5rem", background: "var(--bg-primary)", padding: "0.4rem", borderRadius: "4px", border: "1px solid var(--border-color)", display: "inline-block" }}>
                        Token: <strong style={{ color: "var(--primary)", letterSpacing: "1px" }}>{req.token}</strong>
                      </div>
                    )}
                    <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginTop: "0.5rem" }}>
                      Urgency: {req.urgency} • Requested on: {new Date(req.created_at).toLocaleDateString()}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
