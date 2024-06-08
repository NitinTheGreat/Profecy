import React from 'react';
import Card from '@/components/card';

const Rated = () => {
  // Dummy data for 20 professors
  const professors = [
    { name: 'Professor 1', strictness: 80, teaching: 70, marking: 90, attendance: 85, finalRating: 81.25 },
    { name: 'Professor 2', strictness: 70, teaching: 75, marking: 85, attendance: 80, finalRating: 77.5 },
    // Add more professors here
  ];

  return (
    <div>
      {professors.map((professor, index) => (
        <Card
          key={index}
          professorName={professor.name}
          strictness={professor.strictness}
          teaching={professor.teaching}
          marking={professor.marking}
          attendance={professor.attendance}
          finalRating={professor.finalRating}
        />
      ))}
    </div>
  );
};

export default Rated;
