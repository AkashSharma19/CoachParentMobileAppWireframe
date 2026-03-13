import React from 'react';
import './Header.css';

const Header = ({ studentName = "Alex Johnson", grade = "10th Grade" }) => {
  return (
    <header className="main-header glass-panel">
      <div className="header-content">
        <div className="student-info">
          <div className="avatar glass-card">
            <span className="avatar-initials">AJ</span>
          </div>
          <div className="text-info">
            <h2 className="student-name">{studentName}</h2>
            <p className="student-grade">{grade}</p>
          </div>
        </div>
        <button className="notification-btn glass-card">
          🔔
          <span className="badge"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
