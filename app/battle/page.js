'use client';
import React, { useState } from 'react';
import '../../styles/battle.css';

const Battle = () => {
  const [playerCardValues, setPlayerCardValues] = useState(null);
  const [computerCardValues, setComputerCardValues] = useState(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  // Function to reveal player's card
  const revealPlayerCard = () => {
    setComputerCardValues(null);
    setPlayerCardValues(null);
    getPlayerCardValues();
  };

  const getPlayerCardValues = () => {
    const getRandomValue = () => Math.floor(Math.random() * 91) + 10; // Random value between 10 and 100
    setPlayerCardValues({
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    });
  };

  // Function to handle selecting a value on player's card
  const handlePlayerCardSelection = (value) => {
    setSelectedValue(value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const getRandomValue = () => Math.floor(Math.random() * 91) + 10;
    const computerCardValues = {
      strictness: getRandomValue(),
      skill: getRandomValue(),
      marking: getRandomValue(),
      behavior: getRandomValue(),
    };
    setComputerCardValues(computerCardValues);

    // Ensure playerCardValues is not null
    if (playerCardValues && selectedValue) {
      // Award points based on comparison of values
      if (playerCardValues[selectedValue] > computerCardValues[selectedValue]) {
        setScore(score + 1);
        alert('You won this round!');
      } else if (playerCardValues[selectedValue] < computerCardValues[selectedValue]) {
        alert('You lost this round!');
      } else {
        alert('It\'s a tie!');
      }
    }

    // Increment round
    if (round < 5) {
      setRound(round + 1);
    } else {
      // End of game
      setGameOver(true);
      if (score >= 3) {
        alert('Congratulations! You won the match!');
      } else {
        alert('You lost the match!');
      }
    }
    setSelectedValue(null); // Reset selected value
  };

  return (
    <div className="container">
      <h1 className="Heading">Welcome to Prof Royale!</h1>
      <div className="card-section">
        <div className="card computercard">
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
          {!gameOver && (
            <>
              <button onClick={revealPlayerCard}>Show Card</button>
              <h2>VERSUS!!!</h2>
              <h2>VERSUS!!!</h2>
              <h2>VERSUS!!!</h2>
            </>
          )}
        </div>
        <div className="card playercard">
          {playerCardValues && (
            <form onSubmit={handleSubmit}>
              <div className="card-row">
                <label>
                  Strictness: {playerCardValues.strictness}
                  <input
                    type="radio"
                    name="player"
                    value="strictness"
                    checked={selectedValue === 'strictness'}
                    onChange={() => handlePlayerCardSelection('strictness')}
                  />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Skill: {playerCardValues.skill}
                  <input
                    type="radio"
                    name="player"
                    value="skill"
                    checked={selectedValue === 'skill'}
                    onChange={() => handlePlayerCardSelection('skill')}
                  />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Marking: {playerCardValues.marking}
                  <input
                    type="radio"
                    name="player"
                    value="marking"
                    checked={selectedValue === 'marking'}
                    onChange={() => handlePlayerCardSelection('marking')}
                  />
                </label>
              </div>
              <div className="card-row">
                <label>
                  Behavior: {playerCardValues.behavior}
                  <input
                    type="radio"
                    name="player"
                    value="behavior"
                    checked={selectedValue === 'behavior'}
                    onChange={() => handlePlayerCardSelection('behavior')}
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
      {gameOver && (
        <div className="score">
          <p>Final Score: {score}/5</p>
        </div>
      )}
    </div>
  );
};

export default Battle;
