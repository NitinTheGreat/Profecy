'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/battle.module.css';
import Card from '../../components/card';
import Card1 from '../../components/card1';

const Battle = () => {
  const [playerCardValues, setPlayerCardValues] = useState(null);
  const [computerCardValues, setComputerCardValues] = useState(null);
  const [score, setScore] = useState(0);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfessors('https://profbattle.onrender.com/faculty/random');
  }, []);

  const fetchProfessors = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        headers: {
          'Authorization': 'Token 1da8997b352c4e32fd3783d5ae8a6752196d87b7'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setProfessors(data);
    } catch (error) {
      console.error('Failed to fetch professors:', error);
    } finally {
      setLoading(false);
    }
  };

  const getRandomProfessorValues = () => {
    if (professors.length > 0) {
      const professor = professors[Math.floor(Math.random() * professors.length)];
      return {
        strictness: professor.strict,
        skill: professor.skill,
        marking: professor.marks,
        behavior: professor.fit,
        ap: professor.ap,
      };
    } else {
      console.error('Professors data is empty');
      return null;
    }
  };

  const revealPlayerCard = () => {
    setComputerCardValues(null);
    setPlayerCardValues(getRandomProfessorValues());
  };

  const handlePlayerCardSelection = (value) => {
    setSelectedValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const computerCardValues = getRandomProfessorValues();

    if (playerCardValues && selectedValue) {
      if (playerCardValues[selectedValue] > computerCardValues[selectedValue]) {
        setScore(score + 1);
        alert('You won this round!');
      } else if (playerCardValues[selectedValue] < computerCardValues[selectedValue]) {
        alert('You lost this round!');
      } else {
        alert('It\'s a tie!');
      }
    }

    if (round < 5) {
      setRound(round + 1);
    } else {
      setGameOver(true);
      if (score >= 3) {
        alert('Congratulations! You won the match!');
      } else {
        alert('You lost the match!');
      }
    }
    setSelectedValue(null);
  };

  return (
    <>
      <h1 className={styles.Heading}>Welcome to Prof Royale!</h1>
      <div className={styles.container}>
        <div className={styles['card-section']}>
          <div className={`${styles.card} ${styles.computercard} ${styles['text-white']}`}>
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
          <h2 className={styles.vs}>VERSUS!!!</h2>
          <div className={styles.card} style={{ right: '20vw' }}>
            {playerCardValues && (
              <form onSubmit={handleSubmit}>
                <Card1
                  name="Player"
                  strict={playerCardValues.strictness}
                  skill={playerCardValues.skill}
                  marks={playerCardValues.marking}
                  ap={playerCardValues.ap}
                  fit={playerCardValues.behavior}
                  setSelectedValue={setSelectedValue}
                />
              </form>
            )}
          </div>
        </div>
        <div className={styles.text}>
          {!gameOver && (
            <>
              <button onClick={revealPlayerCard}>Show Card</button>
            </>
          )}
        </div>
        {gameOver && (
          <div className={styles.score}>
            <p>Final Score: {score}/5</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Battle;
