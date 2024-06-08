"use client";
import React, { useState } from 'react';
import '../styles/cardstyle.css';

const Card = ({ professorName, strictness, teaching, marking, attendance, finalRating }) => {
  const [showProgress, setShowProgress] = useState(false);

  const handleMouseEnter = () => {
    setShowProgress(true);
  };

  const handleMouseLeave = () => {
    setShowProgress(false);
  };

  // Calculate average progress
  const averageRating = (strictness + teaching + marking + attendance) / 4;

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="blob"></div>
      <img src="/images/profile.jpg" className={`img ${showProgress ? 'hidden' : ''}`} alt="Professor" />
      <h2>{professorName}</h2>
      {showProgress && (
        <div className="progress-bars">
          <div className="progress-bar">
            <div className="progress" style={{ width: `${strictness}%` }}>Strictness: {strictness}%</div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${teaching}%` }}>Teaching: {teaching}%</div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${marking}%` }}>Marking: {marking}%</div>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${attendance}%` }}>Attendance: {attendance}%</div>
          </div>
          {/* Final Rating */}
          <div className="progress-bar average-progress">
            <div className="progress" style={{ width: `${averageRating}%` }}>Final Rating: {Math.round(finalRating)}%</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
