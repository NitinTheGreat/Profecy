'use client'
import React, { useState, useEffect } from 'react';
import styles from '../../styles/battle.module.css';
import Card from '../../components/card';
import Card1 from '../../components/card1';
import ProtectedRoute from '../../components/Protectedcomp';
import { ToastContainer, toast } from 'react-toastify';
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
      const token= localStorage.getItem('token');
      setLoading(true);
      const response = await fetch(url, {
        headers: {
          'Authorization': 'Token '+ token,
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      // toast.success('Data fetched successfully');
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
        name: professor.name,
        strictness: professor.strict,
        skill: professor.skill,
        marks: professor.marks,
        ap: professor.ap,
        fit: professor.fit,
        image: professor.link, // Assuming the API returns an image URL in the 'image' field
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
    const computerValues = getRandomProfessorValues();
    setComputerCardValues(computerValues);

    if (playerCardValues && selectedValue) {
      if (playerCardValues[selectedValue] > computerValues[selectedValue]) {
        setScore(score + 1);
        // alert('You won this round!');
        toast.success('You won this round!');
        
      } else if (playerCardValues[selectedValue] < computerValues[selectedValue]) {
        // alert('You lost this round!');
        toast.error('You lost this round!');
      } else {
        // alert('It\'s a tie!');
        toast.info('It\'s a tie!');
      }
    }

    if (round < 5) {
      setRound(round + 1);
    } else {
      setGameOver(true);
      if (score >= 3) {
        toast.success('Woooohoooo... You won the match!!!');
      } else {
        toast.error('Better Luck Next time!!!');
      }
    }
    setSelectedValue(null);
  };

  return (
    <>
      <h1 className={styles.Heading}>Welcome to Prof Royale!</h1>
      <div className={styles.container}>
        <div className={styles['card-section']}>
          <div className={`w-[330px] h-[500px] rounded-3xl bg-gray-500 ${styles.computercard} ${styles["text-white"]}`}>
            {computerCardValues && (
              <Card
                name={computerCardValues.name}
                strict={computerCardValues.strictness}
                skill={computerCardValues.skill}
                marks={computerCardValues.marks}
                ap={computerCardValues.ap}
                fit={computerCardValues.fit}
                imageSrc={computerCardValues.image} // Use the professor's image
              />
            )}
          </div>
          <div className={styles.vs}>
            <h2>VERSUS!!!</h2>
            <h2>VERSUS!!!</h2>
            <h2>VERSUS!!!</h2>
          </div>
          <div className="w-[330px] h-[500px] rounded-3xl bg-gray-500">
            {playerCardValues && (
              <form onSubmit={handleSubmit}>
                <Card1
                  name={playerCardValues.name}
                  strict={playerCardValues.strictness}
                  skill={playerCardValues.skill}
                  marks={playerCardValues.marks}
                  ap={playerCardValues.ap}
                  fit={playerCardValues.fit}
                  imagesrc={playerCardValues.image} // Use the professor's image
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

export default ProtectedRoute(Battle);
// export default Battle;