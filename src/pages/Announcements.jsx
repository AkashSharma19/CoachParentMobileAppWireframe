import React from 'react';
import './Announcements.css';

const Announcements = ({ onBack }) => {
  const notices = [
    {
      id: 1,
      type: 'Urgent',
      title: 'Mid-Term Holiday Schedule',
      date: 'Mar 15, 2026',
      content: 'The university will remain closed from March 20th to March 25th for the mid-term break. Regular classes will resume on March 26th.'
    },
    {
      id: 2,
      type: 'Academic',
      title: 'Final Examination Policy Update',
      date: 'Mar 12, 2026',
      content: 'Please review the updated examination guidelines for the upcoming finals. Minimum attendance requirement of 75% remains mandatory.'
    },
    {
      id: 3,
      type: 'General',
      title: 'MU Alumni Meet 2026',
      date: 'Mar 10, 2026',
      content: 'We invite all parents who are MU alumni to the annual meet-and-greet session on April 5th at the University Main Hall.'
    }
  ];

  return (
    <div className="announcements-container animate-fade-in">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Announcements</h2>
      </div>

      <div className="notices-list">
        {notices.map((notice) => (
          <div key={notice.id} className="notice-card glass-card animate-slide-up">
            <div className="notice-header">
              <span className={`notice-badge ${notice.type.toLowerCase()}`}>{notice.type}</span>
              <span className="text-micro">{notice.date}</span>
            </div>
            <h3 className="heading-m notice-title">{notice.title}</h3>
            <p className="text-body notice-content">{notice.content}</p>
          </div>
        ))}
      </div>

      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default Announcements;
