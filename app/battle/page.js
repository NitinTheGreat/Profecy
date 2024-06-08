'use client'
import React, { useState } from 'react';
import '../../styles/battle.css';

const Battle = () => {
  const [playerCardValues, setPlayerCardValues] = useState({
    strictness: 0,
    skill: 0,
    marking: 0,
    behavior: 0,
  });
  const [computerCardValues, setComputerCardValues] = useState(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  // Function to reveal player's card
  const revealPlayerCard = () => {
    // Generate random values for the player's card
    const getRandomValue = () => Math.floor(Math.random() * 101); // Random value between 0 and 100
    setPlayerCardValues({
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    });
    // Reset computer card values
    setComputerCardValues(null);
  };

  // Function to handle selecting a value on computer's card
  const handleComputerCardSelection = (value) => {
    // Award points based on comparison of values
    if (playerCardValues[value] > computerCardValues[value]) {
      setScore(score + 1);
      alert('You won this round!');
    } else if (playerCardValues[value] < computerCardValues[value]) {
      alert('You lost this round!');
    } else {
      alert('It\'s a tie!');
    }

    if (round < 5) {
      setRound(round + 1);
      // Reset card details for next round
      setPlayerCardValues({
        strictness: 0,
        skill: 0,
        marking: 0,
        behavior: 0,
      });
      setComputerCardValues(null);
    } else {
      // End of game
      if (score >= 3) {
        alert('Congratulations! You won the match!');
      } else {
        alert('You lost the match!');
      }
    }
  };

  // Function to handle selecting a value on player's card
  const handlePlayerCardSelection = (value) => {
    // Generate random values for the computer's card
    const getRandomValue = () => Math.floor(Math.random() * 101); // Random value between 0 and 100
    setComputerCardValues({
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    });
  };

  return (
    <>
      <h1 className="Heading">Welcome to Prof Royale!</h1>
      <div className="container">
        <div className="computercard">
          {computerCardValues ? (
            <>
              <div className="card-row">
                <label>
                  Strictness: {computerCardValues.strictness}
                  <input type="radio" onChange={() => handleComputerCardSelection('strictness')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Skill: {computerCardValues.skill}
                  <input type="radio" onChange={() => handleComputerCardSelection('skill')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Marking: {computerCardValues.marking}
                  <input type="radio" onChange={() => handleComputerCardSelection('marking')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Behavior: {computerCardValues.behavior}
                  <input type="radio" onChange={() => handleComputerCardSelection('behavior')} />
                </label>
              </div>
            </>
          ) : (
            <div className="card-placeholder"></div>
          )}
        </div>
        <div className="text">
          <button onClick={revealPlayerCard}>Show Card</button>
          <h2>VERSUS!!!</h2>
          <h2>VERSUS!!!</h2>
          <h2>VERSUS!!!</h2>
        </div>
        <div className="playercard">
          {playerCardValues && (
            <>
              <div className="card-row">
                <label>
                  Strictness: {playerCardValues.strictness}
                  <input type="radio" onChange={() => handlePlayerCardSelection('strictness')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Skill: {playerCardValues.skill}
                  <input type="radio" onChange={() => handlePlayerCardSelection('skill')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Marking: {playerCardValues.marking}
                  <input type="radio" onChange={() => handlePlayerCardSelection('marking')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Behavior: {playerCardValues.behavior}
                  <input type="radio" onChange={() => handlePlayerCardSelection('behavior')} />
                </label>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="score" style={{ top: '40px', right: '20px' }}>
        <p>Score: {score}/5</p>
        <div className="progress-bar" style={{ width: '80px', height: '80px', backgroundColor: 'transparent', position: 'absolute' }}>
          <svg viewBox="0 0 36 36" className="circular-chart green">
            <path className="circle-bg"
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
              strokeDasharray={`${score * 20}, 100`}
              d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Battle;

