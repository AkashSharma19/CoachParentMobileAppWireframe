import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ navigateTo }) => {
  const stats = [
    { label: 'Attendance', value: '98%', color: '#10b981', icon: '✅' },
    { label: 'GPA', value: '3.9', color: '#8b5cf6', icon: '⭐' },
    { label: 'Credits', value: '24/30', color: '#f59e0b', icon: '📚' },
  ];

  const menuCards = [
    { 
      id: 'schedule', 
      title: 'Schedule', 
      status: 'All Good', 
      statusColor: '#10b981', 
      icon: '📅', 
      desc: 'Next: Math @ 9:00 AM' 
    },
    { 
      id: 'assignments', 
      title: 'Assignments', 
      status: 'Danger', 
      statusColor: '#ef4444', 
      icon: '📝', 
      desc: '2 Overdue Tasks' 
    },
    { 
      id: 'grades', 
      title: 'Grades', 
      status: 'Action Needed', 
      statusColor: '#f59e0b', 
      icon: '📊', 
      desc: 'Term 1 Results' 
    },
    { 
      id: 'support', 
      title: 'Support', 
      status: 'Active', 
      statusColor: '#8b5cf6', 
      icon: '🤝', 
      desc: '1 Recent Leave' 
    },
    { 
      id: 'life-mu', 
      title: 'Life @ MU', 
      status: 'New Events', 
      statusColor: '#10b981', 
      icon: '🏛️', 
      desc: 'Annual Spring Fest' 
    },
    { 
      id: 'announcements', 
      title: 'Announcements', 
      status: '2 New', 
      statusColor: '#ef4444', 
      icon: '📢', 
      desc: 'Holiday & Exam Schedule' 
    }
  ];

  return (
    <div className="dashboard-container animate-fade-in">
      <div className="stats-row scroll-hide">
        {stats.map((stat, i) => (
          <div key={i} className="stat-pill-sm glass-card">
            <span className="text-small font-bold">{stat.label}:</span>
            <span style={{ color: stat.color, fontWeight: 700 }}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="menu-grid">
        {menuCards.map((card) => (
          <div 
            key={card.id} 
            className="menu-card glass-card animate-scale-in"
            onClick={() => navigateTo(card.id)}
          >
            <div className="card-status-badge" style={{ background: `${card.statusColor}20`, color: card.statusColor }}>
              {card.status}
            </div>
            <div className="card-content">
              <span className="card-icon-lg">{card.icon}</span>
              <h3 className="heading-m">{card.title}</h3>
              <p className="text-micro">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="highlights-section">
        <h2 className="heading-m">Recent Alerts</h2>
        <div className="alert-strip danger glass-card">
          <span className="icon">⚠️</span>
          <p className="text-small">2 Assignments are overdue. Review them in the Assignments tab.</p>
        </div>
        <div className="alert-strip warning glass-card">
          <span className="icon">📅</span>
          <p className="text-small">3 sessions missed in last 30 days.</p>
        </div>
        <div className="alert-strip info glass-card">
          <span className="icon">📊</span>
          <p className="text-small">New Grade posted in Advanced Mathematics: Calculus Quiz (95/100).</p>
        </div>
      </section>

      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default Dashboard;
