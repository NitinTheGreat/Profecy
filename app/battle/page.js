'use client';
import React, { useState } from 'react';
import '../../styles/battle.css';
import Card from '../../components/card';
import Card1 from '../../components/card1';

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
      ap: getRandomValue(),
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
      ap: getRandomValue(),
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
    <>
      <h1 className="Heading">Welcome to Prof Royale!</h1>
      <div className="container">
        <div className="card-section">
          <div className="card computercard">
            {computerCardValues && (
              <Card
                name="Computer"
                strict={computerCardValues.strictness}
                skill={computerCardValues.skill}
                marks={computerCardValues.marking}
                ap={computerCardValues.ap}
                fit={computerCardValues.behavior}
                imageSrc="/images/computer.jpg"
              />
            )}
          </div>
          <div className="text">
            {!gameOver && (
              <>
                <button onClick={revealPlayerCard}>Show Card</button>
                <h2 className="vs">VERSUS!!!</h2>
              </>
            )}
          </div>
          <div className="card playercard">
            {playerCardValues && (
              <form onSubmit={handleSubmit}>
                <Card1
                  name="Player"
                  strict={playerCardValues.strictness}
                  skill={playerCardValues.skill}
                  marks={playerCardValues.marking}
                  ap={playerCardValues.ap}
                  fit={playerCardValues.behavior}
                  onSubmit={handleSubmit}
                />
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
    </>
  );
};

export default Battle;
