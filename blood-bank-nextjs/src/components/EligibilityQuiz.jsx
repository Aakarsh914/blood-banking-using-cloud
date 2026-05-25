"use client";
import { useState } from "react";
import { evaluateEligibility } from "@/utils/eligibilityValidator";

export default function EligibilityQuiz({ onComplete, onFail }) {
  const [answers, setAnswers] = useState({
    ageValue: 25,
    weightValue: 60,
    recentIllness: false,
    recentSurgeryOrTattoo: false,
    chronicOrInfectiousDiseases: false
  });
  
  const [errorMsgs, setErrorMsgs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = evaluateEligibility(answers);
    
    if (result.isEligible) {
      onComplete();
    } else {
      setErrorMsgs(result.errors);
      if (onFail) onFail(result.errors);
    }
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "2rem auto", animation: "slideInRight 0.5s ease-out", borderTop: "4px solid var(--danger)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "8px", color: "var(--danger)" }}>Donor Health Eligibility Quiz</h2>
      <p style={{ textAlign: "center", color: "var(--text-secondary)", marginBottom: "2rem" }}>
        To ensure the safety of both the donor and the recipient, please answer the following questions truthfully.
      </p>

      <div style={{ 
        marginBottom: "2rem", 
        backgroundColor: "var(--surface-color)", 
        borderLeft: "4px solid var(--primary)", 
        padding: "1.5rem", 
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.05)"
      }}>
        <h3 style={{ marginTop: 0, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--primary)" }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          General Donation Guidelines
        </h3>
        <ul style={{ margin: "0", paddingLeft: "24px", color: "var(--text-secondary)", lineHeight: "1.8" }}>
          <li><strong>Age & Weight:</strong> You must be between <strong>18 and 65 years</strong> of age and weigh a minimum of <strong>50 kg</strong>.</li>
          <li><strong>Recent Health:</strong> You must be feeling well. No cold, cough, fever, or antibiotic use in the past <strong>15 days</strong>.</li>
          <li><strong>Procedures:</strong> No tattoos, piercings, or major surgeries within the last <strong>6 months</strong>.</li>
          <li><strong>Medical History:</strong> You must not have a history of cancer, heart disease, HIV, Hepatitis B/C, or unexplained weight loss.</li>
        </ul>
      </div>

      {errorMsgs.length > 0 && (
         <div className="alert alert-error" style={{ marginBottom: "1rem" }}>
           <strong style={{ display: 'block', marginBottom: '8px' }}>You are currently not eligible to donate:</strong>
           <ul style={{ margin: 0, paddingLeft: '20px' }}>
             {errorMsgs.map((err, i) => <li key={i}>{err}</li>)}
           </ul>
         </div>
      )}

      {errorMsgs.length === 0 && (
        <form onSubmit={handleSubmit}>
          
          <div className="form-group mb-4">
            <label>1. What is your age? (Must be 18 to 65 years)</label>
            <input 
              type="number" 
              className="input" 
              value={answers.ageValue} 
              onChange={e => setAnswers({...answers, ageValue: Number(e.target.value)})} 
              required 
            />
          </div>

          <div className="form-group mb-4">
            <label>2. What is your approximate body weight in kg? (Minimum 50 kg)</label>
            <input 
              type="number" 
              className="input" 
              value={answers.weightValue} 
              onChange={e => setAnswers({...answers, weightValue: Number(e.target.value)})} 
              required 
            />
          </div>

          <div className="form-group mb-4">
            <label>3. Have you had a cold, cough, fever, or taken antibiotics in the last 15 days?</label>
            <select 
              className="select" 
              value={answers.recentIllness ? "yes" : "no"} 
              onChange={e => setAnswers({...answers, recentIllness: e.target.value === "yes"})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label>4. Have you had any surgery, got a tattoo, or had body piercing in the last 6 months?</label>
            <select 
              className="select" 
              value={answers.recentSurgeryOrTattoo ? "yes" : "no"} 
              onChange={e => setAnswers({...answers, recentSurgeryOrTattoo: e.target.value === "yes"})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <div className="form-group mb-4">
            <label>5. Do you have a history of cancer, heart disease, HIV, Hepatitis B/C, or unexplained weight loss?</label>
            <select 
              className="select" 
              value={answers.chronicOrInfectiousDiseases ? "yes" : "no"} 
              onChange={e => setAnswers({...answers, chronicOrInfectiousDiseases: e.target.value === "yes"})}
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "1rem", marginTop: "1rem", fontSize: "1.1rem" }}>
            Submit Answers
          </button>
        </form>
      )}

      {errorMsgs.length > 0 && (
         <button 
           type="button" 
           className="btn" 
           style={{ width: "100%", padding: "1rem", marginTop: "1rem", border: "1px solid var(--border-color)" }} 
           onClick={() => setErrorMsgs([])}
         >
            Retake Quiz (If you made a mistake)
         </button>
      )}
    </div>
  );
}
