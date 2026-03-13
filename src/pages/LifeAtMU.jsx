import React from 'react';
import './LifeAtMU.css';

const LifeAtMU = ({ onBack }) => {
  const events = [
    {
      id: 1,
      title: "MU Annual Spring Fest",
      date: "March 25, 2026",
      category: "Festival",
      image: "campus_event_vibrant_mockup_1773389452256.png",
      desc: "Join us for a day of music, food, and student performances on the main quad."
    },
    {
      id: 2,
      title: "Global Cultural Fair",
      date: "April 02, 2026",
      category: "Culture",
      image: "cultural_fair_mockup_1773389468603.png",
      desc: "Explore cultures from around the world with food stalls and traditional performances."
    },
    {
      id: 3,
      title: "Tech Symposium 2026",
      date: "April 15, 2026",
      category: "Academic",
      image: "tech_symposium_mockup_1773389486169.png",
      desc: "Latest in robotics and AI presented by our Engineering and Computer Science departments."
    }
  ];

  return (
    <div className="life-mu-container animate-fade-in">
      <div className="page-header-back">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2 className="heading-l">Life @ MU</h2>
      </div>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card glass-card animate-slide-up">
            <div className="event-image-container">
              <div className="event-category-pill">{event.category}</div>
              <img 
                src={`/src/assets/${event.image}`} 
                alt={event.title} 
                className="event-image" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1523050853064-59f63ef4ed04?auto=format&fit=crop&q=80&w=600';
                }}
              />
            </div>
            <div className="event-details">
              <span className="event-date text-micro">{event.date}</span>
              <h3 className="heading-m event-title">{event.title}</h3>
              <p className="text-small text-muted">{event.desc}</p>
              <button className="btn-read-more">Learn More →</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ height: '40px' }}></div>
    </div>
  );
};

export default LifeAtMU;
