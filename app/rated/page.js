'use client';
import React, { useEffect, useState } from 'react';
import Card from '../../components/card';
import '../../styles/rated.css';

const Rated = () => {
  const [professors, setProfessors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

  // Define fetchProfessors function
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
      setProfessors(data.results);
      setNextPage(data.next);
      setPrevPage(data.previous);
    } catch (error) {
      console.error('Failed to fetch professors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchProfessors('https://profbattle.onrender.com/faculty');
  }, []);

  const handleNextPage = () => {
    if (nextPage) {
      fetchProfessors(nextPage);
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      fetchProfessors(prevPage);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <div>
          <div className="cards-container">
            <div className="cards-wrapper">
              {professors.map((professor) => (
                <Card
                  key={professor.id}
                  name={professor.name}
                  strict={professor.strict}
                  skill={professor.skill}
                  marks={professor.marks}
                  ap={professor.ap}
                  fit={professor.fit}
                  imageSrc="/images/profile.jpg" // Example image source
                />
              ))}
            </div>
          </div>
          <div className="pagination-buttons">
            <button className="prev-button" onClick={handlePrevPage} disabled={!prevPage}>Previous</button>
            <button className="next-button" onClick={handleNextPage} disabled={!nextPage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rated;
