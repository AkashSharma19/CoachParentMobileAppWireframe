import React, { useState } from 'react';
import './Assignments.css';

const Assignments = ({ onBack }) => {
  const [activeSubTab, setActiveSubTab] = useState('today');

  const assignments = {
    overdue: [
      { id: 1, title: 'Math Chapter 5 Quiz', date: 'Due 2 days ago', priority: 'High', status: 'overdue' },
      { id: 2, title: 'English Essay Draft', date: 'Due 3 days ago', priority: 'Medium', status: 'overdue' },
    ],
    today: [
      { id: 3, title: 'Chemistry Lab Report', date: 'Due by 11:59 PM', priority: 'Normal', status: 'today' },
      { id: 4, title: 'History Reading', date: 'Due by 4:00 PM', priority: 'Normal', status: 'today' },
    ],
    upcoming: [
      { id: 5, title: 'History Research Paper', date: 'Due in 5 days', priority: 'High', status: 'upcoming' },
      { id: 6, title: 'Physics Final Project', date: 'Due in 10 days', priority: 'High', status: 'upcoming' },
      { id: 7, title: 'Art Portfolio', date: 'Due in 14 days', priority: 'Low', status: 'upcoming' },
    ]
  };

  const renderAssignmentCard = (item) => (
    <div key={item.id} className={`glass-card assignment-card-detailed ${item.status}-border animate-fade-in`}>
      <div className="assign-main">
        <h4 className="text-body">{item.title}</h4>
        <p className="text-small">{item.date}</p>
      </div>
      <div className="assign-meta">
        {item.priority === 'High' && <span className="priority-pill">High</span>}
        <div className="arrow-btn">→</div>
      </div>
    </div>
  );

  return (
    <div className="assignments-page">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Assignments</h2>
      </div>

      <div className="alert-strip danger glass-card">
        <span className="icon">⚠️</span>
        <p className="text-small">2 Assignments are overdue. Review them in the Overdue tab.</p>
      </div>

      <div className="sub-tabs glass-card">
        <button 
          className={`sub-tab ${activeSubTab === 'overdue' ? 'active overdue' : ''}`}
          onClick={() => setActiveSubTab('overdue')}
        >
          Overdue <span className="count">{assignments.overdue.length}</span>
        </button>
        <button 
          className={`sub-tab ${activeSubTab === 'today' ? 'active today' : ''}`}
          onClick={() => setActiveSubTab('today')}
        >
          Today <span className="count">{assignments.today.length}</span>
        </button>
        <button 
          className={`sub-tab ${activeSubTab === 'upcoming' ? 'active upcoming' : ''}`}
          onClick={() => setActiveSubTab('upcoming')}
        >
          Upcoming <span className="count">{assignments.upcoming.length}</span>
        </button>
      </div>

      <div className="assignments-list">
        {assignments[activeSubTab].length > 0 ? (
          assignments[activeSubTab].map(renderAssignmentCard)
        ) : (
          <div className="empty-state text-small">No assignments in this category</div>
        )}
      </div>

      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Assignments;
