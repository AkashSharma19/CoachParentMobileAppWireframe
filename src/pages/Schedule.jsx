import React, { useState } from 'react';
import './Schedule.css';

const Schedule = ({ onBack }) => {
  const [selectedDate, setSelectedDate] = useState(13); // Default to March 13 (Monday)

  const weekDates = [
    { day: 'Mon', date: 13, full: 'Monday, March 13' },
    { day: 'Tue', date: 14, full: 'Tuesday, March 14' },
    { day: 'Wed', date: 15, full: 'Wednesday, March 15' },
    { day: 'Thu', date: 16, full: 'Thursday, March 16' },
    { day: 'Fri', date: 17, full: 'Friday, March 17' },
    { day: 'Sat', date: 18, full: 'Saturday, March 18' },
    { day: 'Sun', date: 19, full: 'Sunday, March 19' },
  ];

  const scheduleData = {
    13: [
      { time: '09:00 AM', subject: 'Advanced Mathematics', faculty: 'Dr. Sarah Smith', room: 'Room 402' },
      { time: '11:30 AM', subject: 'Global History', faculty: 'Prof. Mark Davis', room: 'Hall B' },
      { time: '02:00 PM', subject: 'Physics Lab', faculty: 'Dr. Robert Brown', room: 'Lab 3' },
    ],
    14: [
      { time: '08:30 AM', subject: 'English literature', faculty: 'Ms. Emily White', room: 'Room 201' },
      { time: '10:00 AM', subject: 'Chemistry', faculty: 'Dr. Alan Grant', room: 'Room 105' },
      { time: '01:30 PM', subject: 'Physical Education', faculty: 'Coach Mike', room: 'Gymnasium' },
    ],
    15: [
      { time: '09:00 AM', subject: 'Advanced Mathematics', faculty: 'Dr. Sarah Smith', room: 'Room 402' },
      { time: '11:00 AM', subject: 'Biology', faculty: 'Dr. Jane Roe', room: 'Bio Lab' },
      { time: '03:00 PM', subject: 'Art & Design', faculty: 'Mrs. Lisa Art', room: 'Studio 1' },
    ],
    // Empty days for demo
    16: [], 17: [], 18: [], 19: []
  };

  const activeSchedule = scheduleData[selectedDate] || [];
  const activeFullDate = weekDates.find(d => d.date === selectedDate)?.full;

  return (
    <div className="schedule-container animate-fade-in">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Academic Schedule</h2>
      </div>

      <div className="alert-strip warning glass-card">
        <span className="icon">📅</span>
        <p className="text-small">3 sessions missed in last 30 days. Weekly goal: 100% attendance.</p>
      </div>

      <div className="date-scroller">
        {weekDates.map((item) => {
          const count = scheduleData[item.date]?.length || 0;
          return (
            <button 
              key={item.date} 
              className={`date-item glass-card ${selectedDate === item.date ? 'active' : ''}`}
              onClick={() => setSelectedDate(item.date)}
            >
              <span className="day-name">{item.day}</span>
              <div className="date-number-group">
                <span className="day-number">{item.date}</span>
                {count > 0 && <span className="class-count-badge">{count}</span>}
              </div>
            </button>
          );
        })}
      </div>

      <div className="timeline-view">
        {activeSchedule.length > 0 ? (
          activeSchedule.map((item, idx) => (
            <div key={idx} className="timeline-item animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="timeline-left">
                <span className="time-text">{item.time}</span>
                <div className="dot"></div>
                <div className="line"></div>
              </div>
              <div className="timeline-right glass-card">
                <div className="subject-info">
                  <h4 className="text-body font-bold">{item.subject}</h4>
                  <p className="text-small text-muted">{item.faculty} • {item.room}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-schedule glass-card">
            <p className="text-body">No classes scheduled for this day</p>
            <span className="text-small text-muted">Enjoy your day off! ☁️</span>
          </div>
        )}
      </div>


      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default Schedule;
