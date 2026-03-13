import React, { useState } from 'react';
import './Support.css';

const Support = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  
  const recentLeaves = [
    { id: 1, type: 'Medical', date: 'Mar 10 - Mar 12, 2026', status: 'Approved' },
    { id: 2, type: 'Personal', date: 'Mar 05, 2026', status: 'Approved' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="support-container animate-fade-in">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Support</h2>
      </div>
      <section className="support-section">
        <h2 className="heading-m">Recent Leaves applied by your ward</h2>
        <div className="leaves-list">
          {recentLeaves.map(leave => (
            <div key={leave.id} className="leave-card glass-card">
              <div className="leave-info">
                <p className="text-body font-bold">{leave.type} Leave</p>
                <p className="text-small text-muted">{leave.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="support-section">
        <h2 className="heading-m">Raise a Concern</h2>
        {submitted ? (
          <div className="success-message glass-card animate-scale-in">
            <div className="success-icon">✓</div>
            <h3 className="heading-m">Concern Submitted</h3>
            <p className="text-body">We have received your message. Our team will get back to you within 24 hours.</p>
            <button className="btn-primary" onClick={() => setSubmitted(false)}>Raise Another</button>
          </div>
        ) : (
          <form className="support-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="text-small">Category</label>
              <select className="glass-field" required>
                <option value="">Select a category</option>
                <option value="academic">Academic</option>
                <option value="fees">Fees & Payments</option>
                <option value="attendance">Attendance</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label className="text-small">Subject</label>
              <input type="text" className="glass-input" placeholder="Brief summary" required />
            </div>

            <div className="form-group">
              <label className="text-small">Description</label>
              <textarea className="glass-field glass-textarea" rows="4" placeholder="Describe your concern in detail..." required></textarea>
            </div>

            <button type="submit" className="btn-primary">Submit Concern</button>
          </form>
        )}
      </section>

      <div className="contact-info">
        <p className="text-small">Emergency? Call +1 (555) 000-1234</p>
      </div>
      
      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Support;
