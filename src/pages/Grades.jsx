import React, { useState } from 'react';
import './Grades.css';

const Grades = ({ onBack }) => {
  const [selectedTerm, setSelectedTerm] = useState('Term 1');
  const [expandedCourse, setExpandedCourse] = useState(null);

  const terms = ['Term 1', 'Term 2'];

  const gradesData = {
    'Term 1': {
      tgpa: '3.90',
      courses: [
        {
          id: 'math1',
          course: 'Advanced Mathematics',
          instructor: 'Dr. Sarah Smith',
          gpa: '4.0',
          attendance: '98%',
          assignments: [
            { name: 'Calculus Quiz', score: '95/100' },
            { name: 'Midterm Exam', score: '92/100' },
            { name: 'Daily Homework', score: '100/100' }
          ]
        },
        {
          id: 'hist1',
          course: 'Global History',
          instructor: 'Prof. Mark Davis',
          gpa: '3.8',
          attendance: '95%',
          assignments: [
            { name: 'Research Paper', score: '88/100' },
            { name: 'Class Participation', score: '100/100' }
          ]
        }
      ]
    },
    'Term 2': {
      tgpa: '3.85',
      courses: [
        {
          id: 'phys1',
          course: 'Physics Lab',
          instructor: 'Dr. Robert Brown',
          gpa: '3.7',
          attendance: '92%',
          assignments: [
            { name: 'Lab Report 1', score: '85/100' },
            { name: 'Momentum Quiz', score: '89/100' }
          ]
        }
      ]
    }
  };

  const toggleCourse = (id) => {
    setExpandedCourse(expandedCourse === id ? null : id);
  };

  return (
    <div className="grades-container animate-fade-in">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Academic Grades</h2>
      </div>

      <div className="alert-strip info glass-card" style={{ marginBottom: '20px' }}>
        <span className="icon">📊</span>
        <p className="text-small">New Grade posted in Advanced Mathematics: Calculus Quiz (95/100).</p>
      </div>
      <div className="overall-summary-grid">
        <div className="summary-card glass-card">
          <span className="text-small">Cumulative GPA</span>
          <h2 className="summary-val text-accent">3.92</h2>
        </div>
        <div className="summary-card glass-card">
          <span className="text-small">Overall Attendance</span>
          <h2 className="summary-val text-success">96.4%</h2>
        </div>
      </div>

      <div className="grades-selection-header">
        <div className="selector-card glass-card">
          <span className="text-micro">Select Term</span>
          <select 
            className="term-select-minimal"
            value={selectedTerm}
            onChange={(e) => setSelectedTerm(e.target.value)}
          >
            {terms.map(term => (
              <option key={term} value={term} style={{ background: '#1a1a1a' }}>{term}</option>
            ))}
          </select>
        </div>
        <div className="tgpa-card glass-card">
          <span className="text-micro">Term GPA</span>
          <h3 className="tgpa-val">{gradesData[selectedTerm].tgpa}</h3>
        </div>
      </div>

      <div className="courses-list">
        {gradesData[selectedTerm].courses.length > 0 ? gradesData[selectedTerm].courses.map((item) => (
          <div key={item.id} className={`course-card-premium glass-card ${expandedCourse === item.id ? 'expanded' : ''}`}>
            <div className="course-main-info" onClick={() => toggleCourse(item.id)}>
              <div className="course-title-group">
                <h3 className="heading-m">{item.course}</h3>
                <p className="text-small">{item.instructor}</p>
              </div>
              <div className="course-stats-summary">
                <div className="quick-metric">
                  <span className="metric-label">GPA</span>
                  <span className="metric-val">{item.gpa}</span>
                </div>
                <div className="chevron">{expandedCourse === item.id ? '−' : '+'}</div>
              </div>
            </div>

            <div className="course-expanded-content">
              <div className="full-metrics-grid">
                <div className="grid-item">
                  <p className="text-small">Attendance</p>
                  <p className="metric-heavy">{item.attendance}</p>
                </div>
                <div className="grid-item">
                  <p className="text-small">Assignments</p>
                  <p className="metric-heavy">{item.assignments.length}</p>
                </div>
              </div>

              <div className="assignments-table">
                {item.assignments.map((assignment, i) => (
                  <div key={i} className="assignment-minimal-row">
                    <span className="text-body">{assignment.name}</span>
                    <span className="text-body font-bold">{assignment.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )) : (
          <div className="empty-state text-secondary">No data available for {selectedTerm}</div>
        )}
      </div>

      <div style={{ height: '100px' }}></div>
    </div>
  );
};

export default Grades;
