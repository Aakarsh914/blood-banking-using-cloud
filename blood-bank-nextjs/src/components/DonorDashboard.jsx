"use client";
import { useState, useEffect, useContext } from "react";
import apiClient from "@/services/apiClient";
import { AuthContext } from "@/contexts/AuthContext";
import { calculateDistance } from "@/utils/distance";

export default function DonorDashboard() {
  const { user, logout } = useContext(AuthContext);
  const [hospitals, setHospitals] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState("");
  const [hospitalSearch, setHospitalSearch] = useState("");

  // Scheduling state
  const [activeHospital, setActiveHospital] = useState(null);
  const [donationType, setDonationType] = useState(""); // AT_HOSPITAL or AT_HOME
  const [scheduledDate, setScheduledDate] = useState("");

  // Blood Request State
  const [showBloodRequest, setShowBloodRequest] = useState(false);
  const [requestForm, setRequestForm] = useState({
    hospitalId: "",
    bloodGroup: user?.bloodGroup || "A+",
    units: 1,
    urgency: "NORMAL"
  });
  const [reqMessage, setReqMessage] = useState("");
  const [reqError, setReqError] = useState("");

  const quotes = [
    "A single pint can save three lives. A single gesture can create a million smiles.",
    "The blood you donate gives someone another chance at life.",
    "You don't have to be a doctor to save a life: Just donate blood.",
    "Be a hero, someone's life is running in your veins."
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    if (!user) return;
    try {
      try {
        await apiClient.get("/health");
      } catch {
        /* wake Render if sleeping */
      }
      const [hospRes, apptRes, reqRes] = await Promise.all([
        apiClient.get("/hospitals"),
        apiClient.get("/appointments"),
        apiClient.get("/requests")
      ]);
      setHospitals(hospRes.data);
      setAppointments(apptRes.data);
      setRequests(reqRes.data);
      setError("");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Session expired. Please log in again.");
      } else if (err.code === "ECONNABORTED") {
        setError("Server is waking up. Wait a minute and refresh.");
      } else {
        setError(err.response?.data?.error || "Failed to load dashboard data. Please refresh.");
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

  const initiateBooking = (hospitalId, type) => {
    setActiveHospital(hospitalId);
    setDonationType(type);
    setScheduledDate("");
    setMessage("");
    setError("");
  };

  const submitBooking = async (e) => {
    e.preventDefault();
    if (!scheduledDate) {
      setError("Please select a date.");
      return;
    }
    try {
      await apiClient.post("/appointments", {
        hospitalId: activeHospital,
        donationType,
        scheduledDate
      });
      setMessage("Donation request submitted successfully!");
      setActiveHospital(null);
      loadData();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to submit request.");
    }
  };
  const submitBloodRequest = async (e) => {
    e.preventDefault();
    setReqMessage("");
    setReqError("");
    try {
      await apiClient.post("/requests", requestForm);
      setReqMessage("Blood request submitted successfully! Your token will be generated.");
      setShowBloodRequest(false);
      loadData();
    } catch (err) {
      setReqError(err.response?.data?.error || "Failed to submit request.");
    }
  };

  let lastDonationDate = null;
  let isEligible = false;
  let eligibilityDate = null;
  let hasDonatedBefore = false;

  const completedAppts = appointments.filter(a => a.status === 'COMPLETED');
  if (completedAppts.length > 0) {
    hasDonatedBefore = true;
    completedAppts.sort((a, b) => new Date(b.scheduled_date) - new Date(a.scheduled_date));
    lastDonationDate = new Date(completedAppts[0].scheduled_date);
    eligibilityDate = new Date(lastDonationDate.getTime() + 56 * 24 * 60 * 60 * 1000);
    isEligible = Date.now() >= eligibilityDate.getTime();
  } else {
    isEligible = true;
  }

  useEffect(() => {
    if (isEligible || !eligibilityDate) return;
    
    const targetTime = eligibilityDate.getTime();
    const updateTime = () => {
      const now = new Date().getTime();
      const distance = targetTime - now;
      if (distance <= 0) {
        setTimeLeft("You are now eligible! Please refresh the page.");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [isEligible, eligibilityDate?.getTime()]);

  let bannerMessage = null;
  let bannerType = "info";

  if (hasDonatedBefore) {
    if (!isEligible) {
      bannerMessage = `Important: You will be able to donate blood again after 8 weeks on ${eligibilityDate.toLocaleDateString()}.`;
      bannerType = "warning";
    } else {
      bannerMessage = "Great news! Your 8-week waiting period is over. You are now eligible to donate blood again.";
      bannerType = "success";
    }
  }

  if (loading) {
    return <div className="app-container" style={{ textAlign: 'center', marginTop: '50px' }}>Loading Donor Portal...</div>;
  }

  return (
    <div className="app-container">
      <div className="header" style={{ marginBottom: "2rem" }}>
        <h1 className="header-title" style={{ color: "var(--danger)" }}>Donor Control Center</h1>
        <div className="flex items-center gap-4 flex-wrap">
          <div style={{ color: 'var(--text-secondary)' }}>
            Welcome back, <strong>{user?.name}</strong> <span className="badge badge-blood">{user?.bloodGroup}</span>
          </div>
          <button className="btn btn-primary" onClick={logout} style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>Logout</button>
        </div>
      </div>

      <div style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('/donor_hero_banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '4rem 2rem',
        borderRadius: 'var(--radius-lg)',
        marginBottom: '2.5rem',
        textAlign: 'center',
        boxShadow: 'var(--shadow-lg)',
        transition: 'all 0.5s ease'
      }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: 'white',
          textShadow: '0 2px 4px rgba(0,0,0,0.5)',
          animation: 'fadeIn 1s ease-in-out'
        }}>
          "{quotes[quoteIndex]}"
        </h2>
        <p style={{ opacity: 0.9, fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Every drop counts. Connect with local hospitals below to schedule your next life-saving donation.
        </p>
      </div>

      {bannerMessage && (
        <div className={`alert ${bannerType === 'warning' ? 'alert-error' : 'alert-success'}`} style={{ fontWeight: 'bold', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          {bannerType === 'warning' ? '⏳' : '✅'} {bannerMessage}
        </div>
      )}

      {hasDonatedBefore && (
        <div className="card mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--primary-light)', border: '1px solid var(--primary-color)' }}>
          <div>
            <h2 style={{ margin: 0, color: 'var(--primary-hover)' }}>Need Blood?</h2>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>As a registered donor, you can request blood from our network when you or your family need it.</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowBloodRequest(!showBloodRequest)}>
            {showBloodRequest ? 'Close Request Form' : 'Ask for Blood'}
          </button>
        </div>
      )}

      {showBloodRequest && (
        <div className="card mb-4" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <h2 style={{ marginTop: 0 }}>Create a Blood Request</h2>
          {reqError && <div className="alert alert-error">{reqError}</div>}
          {reqMessage && <div className="alert alert-success">{reqMessage}</div>}
          <form onSubmit={submitBloodRequest}>
            <div className="form-row mb-4">
              <div className="form-group">
                <label>Target Hospital</label>
                <select className="select" value={requestForm.hospitalId} onChange={(e) => setRequestForm({ ...requestForm, hospitalId: e.target.value })} required>
                  <option value="">Select a hospital...</option>
                  {hospitalsWithDistance
                    .map(h => (
                    <option key={h.id} value={h.id}>{h.name} {h.distance !== null ? `(${h.distance.toFixed(1)} km away)` : ''}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Blood Group Needed</label>
                <select className="select" value={requestForm.bloodGroup} onChange={(e) => setRequestForm({ ...requestForm, bloodGroup: e.target.value })}>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                    <option key={group} value={group}>{group}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row mb-4">
              <div className="form-group">
                <label>Units Needed</label>
                <input type="number" min="1" className="input" value={requestForm.units} onChange={(e) => setRequestForm({ ...requestForm, units: e.target.value })} required />
              </div>
              <div className="form-group">
                <label>Urgency</label>
                <select className="select" value={requestForm.urgency} onChange={(e) => setRequestForm({ ...requestForm, urgency: e.target.value })}>
                  <option value="NORMAL">Normal</option>
                  <option value="URGENT">Urgent</option>
                  <option value="CRITICAL">Critical</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit Blood Request</button>
          </form>
        </div>
      )}

      {error && !activeHospital && <div className="alert alert-error">{error}</div>}
      {message && !activeHospital && <div className="alert alert-success">{message}</div>}

      <div className="grid-2">
        <div>
          {!isEligible ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem 2rem', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
              <h2 style={{ color: 'var(--danger)', marginBottom: '1rem', marginTop: 0 }}>Rest & Recover</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Thank you for your recent life-saving donation! For your health and safety, you must wait 8 weeks before donating again.
              </p>
              <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--primary)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                <h3 style={{ margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>Time Until Next Donation:</h3>
                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)', fontFamily: 'monospace', letterSpacing: '2px' }}>
                  {timeLeft}
                </div>
                <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontWeight: 'bold' }}>
                  Eligible on: {eligibilityDate?.toLocaleDateString()}
                </div>
              </div>
            </div>
          ) : (
            <div className="card">
              <h2 style={{ marginTop: 0 }}>Hospitals in Jammu</h2>
              <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>Select a nearby hospital to donate blood in person, or request their mobile van unit for home blood collection.</p>
              
              <div className="form-group mb-4">
                <input 
                  type="text" 
                  className="input" 
                  placeholder="🔍 Search hospitals by name or city..." 
                  value={hospitalSearch} 
                  onChange={(e) => setHospitalSearch(e.target.value)} 
                />
              </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {hospitalsWithDistance.filter(h => h.name.toLowerCase().includes(hospitalSearch.toLowerCase()) || h.city.toLowerCase().includes(hospitalSearch.toLowerCase())).map(h => (
                <div key={h.id} style={{ border: "1px solid var(--border-color)", padding: "1.25rem", borderRadius: "8px", background: "var(--bg-secondary)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                    <div>
                      <h3 style={{ margin: 0, color: "var(--text-primary)" }}>{h.name}</h3>
                      <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                        {h.city} {h.distance !== null && <strong style={{ color: 'var(--primary)' }}> • 📍 {h.distance.toFixed(1)} km away</strong>}
                      </div>
                    </div>
                    <span className="badge badge-blood">Verified</span>
                  </div>

                  {activeHospital === h.id ? (
                    <form onSubmit={submitBooking} style={{ background: "var(--bg-primary)", padding: "1rem", borderRadius: "6px", marginTop: "1rem" }}>
                      <h4 style={{ marginBottom: "0.75rem", marginTop: 0 }}>
                        {donationType === 'AT_HOME' ? '🚗 Request Home Collection' : '🏥 Book Hospital Visit'}
                      </h4>
                      {donationType === 'AT_HOSPITAL' && (
                        <div style={{ marginBottom: '1rem', padding: '0.85rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '6px', fontSize: '0.9rem' }}>
                          <strong style={{ color: 'var(--text-primary)' }}>📍 Location Details:</strong><br/>
                          <span style={{ color: 'var(--text-secondary)' }}>{h.name}, {h.city}</span><br/>
                          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(h.name + ' ' + h.city)}`} target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-block', marginTop: '0.4rem', fontWeight: '500' }}>
                            🗺️ View on Google Maps
                          </a>
                        </div>
                      )}
                      {error && <div className="alert alert-error" style={{ padding: "0.5rem" }}>{error}</div>}
                      <div className="form-group mb-4">
                        <label>Preferred Date</label>
                        <input type="date" className="input" value={scheduledDate} onChange={e => setScheduledDate(e.target.value)} required />
                      </div>
                      <div className="flex gap-2">
                        <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Confirm Booking</button>
                        <button type="button" className="btn" style={{ background: "var(--border-color)" }} onClick={() => setActiveHospital(null)}>Cancel</button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex gap-2 flex-wrap">
                      <button
                        className="btn"
                        style={{ flex: 1, backgroundColor: "var(--accent-color)", color: "white" }}
                        onClick={() => initiateBooking(h.id, 'AT_HOSPITAL')}
                      >
                        Donate at Hospital
                      </button>
                      <button
                        className="btn"
                        style={{ flex: 1, backgroundColor: "var(--success)", color: "white" }}
                        onClick={() => initiateBooking(h.id, 'AT_HOME')}
                      >
                        Request Home Collection
                      </button>
                    </div>
                  )}
                </div>
              ))}
                {hospitalsWithDistance.filter(h => h.name.toLowerCase().includes(hospitalSearch.toLowerCase()) || h.city.toLowerCase().includes(hospitalSearch.toLowerCase())).length === 0 && (
                  <p>No hospitals found matching your search.</p>
                )}
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="card">
            <h2 style={{ marginTop: 0 }}>Your Appointment History</h2>
            <p style={{ color: "var(--text-secondary)", marginBottom: "1.5rem" }}>Track the status of your past and upcoming donations.</p>

            {appointments.length === 0 ? (
              <div style={{ padding: "2rem", textAlign: "center", border: "1px dashed var(--border-color)", borderRadius: "8px", color: "var(--text-secondary)" }}>
                You have no existing or past appointments.
              </div>
            ) : (
              <ul className="list-container">
                {appointments.map(appt => (
                  <li key={appt.id} className="list-item">
                    <div className="list-item-content">
                      <div className="list-item-title">{appt.hospital_name || 'Hospital Not Found'}</div>
                      <div className="list-item-subtitle" style={{ fontWeight: 500 }}>
                        {appt.donation_type === 'AT_HOME' ? '🚗 Home Collection' : '🏥 In-Hospital Visit'}
                      </div>
                      <div className="list-item-subtitle" style={{ fontSize: "0.75rem", marginTop: "4px" }}>
                        Scheduled for: {new Date(appt.scheduled_date).toLocaleDateString()}
                      </div>
                    </div>
                    <div>
                      <span className={`badge badge-status-${appt.status}`}>{appt.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {requests.length > 0 && (
            <div className="card mt-4">
              <h2 style={{ marginTop: 0 }}>Your Blood Requests</h2>
              <ul className="list-container">
                {requests.map(req => {
                  const targetHospital = hospitals.find(h => h.id === req.hospital_id);
                  return (
                    <li key={req.id} className="list-item">
                      <div className="list-item-content">
                        <div className="list-item-title">
                          <span className="badge badge-blood">{req.blood_group}</span> • {req.units} Units
                        </div>
                        <div className="list-item-subtitle" style={{ marginTop: "4px" }}>
                          Hospital: {targetHospital ? targetHospital.name : `ID #${req.hospital_id}`}
                        </div>
                        <div className="list-item-subtitle" style={{ fontSize: "0.75rem", marginTop: "4px" }}>
                          Urgency: {req.urgency} • Requested on: {new Date(req.created_at).toLocaleDateString()}
                        </div>
                        {req.token && (
                          <div style={{ fontSize: "0.85rem", marginTop: "0.5rem", background: "var(--bg-secondary)", padding: "0.3rem", borderRadius: "4px", border: "1px solid var(--border-color)", display: "inline-block" }}>
                            Token: <strong style={{ color: "var(--primary)" }}>{req.token}</strong>
                          </div>
                        )}
                      </div>
                      <div>
                        <span className={`badge badge-status-${req.status}`}>{req.status}</span>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
