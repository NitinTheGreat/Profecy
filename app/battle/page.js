'use client'
import React, { useState } from 'react';
import '../../styles/battle.css';

const Battle = () => {
  const [playerCardValues, setPlayerCardValues] = useState(null);
  const [computerCardValues, setComputerCardValues] = useState(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);

  // Function to reveal player's card
  const revealPlayerCard = () => {
    // Generate random values for the player's card
    const getRandomValue = () => Math.floor(Math.random() * 91) + 10; // Random value between 10 and 100
    setPlayerCardValues({
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    });
    // Generate random values for the computer's card
    setComputerCardValues({
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    });
    // Reset score
    setScore(0);
    // Reset round
    setRound(1);
  };

  // Function to handle selecting a value on player's card
  const handlePlayerCardSelection = (value) => {
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
    } else {
      // End of game
      if (score >= 3) {
        alert('Congratulations! You won the match!');
      } else {
        alert('You lost the match!');
      }
    }
    // Reset player card values for the next round
    setPlayerCardValues(null);
  };

  return (
    <>
      <h1 className="Heading">Welcome to Prof Royale!</h1>
      <div className="container">
        <div className="computercard">
          {computerCardValues ? (
            <>
              <div className="card-row">
                <p>Strictness: {computerCardValues.strictness}</p>
              </div>
              <div className="card-row">
                <p>Skill: {computerCardValues.skill}</p>
              </div>
              <div className="card-row">
                <p>Marking: {computerCardValues.marking}</p>
              </div>
              <div className="card-row">
                <p>Behavior: {computerCardValues.behavior}</p>
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
                  <input type="radio" name="player" onChange={() => handlePlayerCardSelection('strictness')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Skill: {playerCardValues.skill}
                  <input type="radio" name="player" onChange={() => handlePlayerCardSelection('skill')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Marking: {playerCardValues.marking}
                  <input type="radio" name="player" onChange={() => handlePlayerCardSelection('marking')} />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Behavior: {playerCardValues.behavior}
                  <input type="radio" name="player" onChange={() => handlePlayerCardSelection('behavior')} />
                </label>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="score" style={{ top: '40px', right: '20px' }}>
        <p>Score: {score}/5</p>
      </div>
    </>
  );
};

export default Battle;
