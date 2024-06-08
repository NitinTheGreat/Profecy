// import React from 'react';
// import Card from '@/components/card';
// import Card from '@/components/'
// const Rated = () => {
//   // Dummy data for 20 professors
//   const professors = [
//     { name: 'Professor 1', strictness: 80, teaching: 70, marking: 90, attendance: 85, finalRating: 81.25 },
//     { name: 'Professor 2', strictness: 70, teaching: 75, marking: 85, attendance: 80, finalRating: 77.5 },
//     // Add more professors here
//   ];

//   return (
//     <div>
//       {professors.map((professor, index) => (
//         <Card
//           key={index}
//           professorName={professor.name}
//           strictness={professor.strictness}
//           teaching={professor.teaching}
//           marking={professor.marking}
//           attendance={professor.attendance}
//           finalRating={professor.finalRating}
//         />
//       ))}
//     </div>
//   );
// };

// export default Rated;


import React from 'react';
import Card from '@/components/card';
import CardOld from '@/components/cardOld'
const Rated = () => {
  const imageSrc = "/images/profile.jpg"; // Example image source

  // Define other props for the Card component
  const professorName = "Professor John Doe";
  const strictness = 4.5;
  const teaching = 3.8;
  const marking = 4.2;
  const attendance = 4.0;
  const finalRating = (strictness + teaching + marking + attendance) / 4;
  const professorData = {
    professorName: 'John Doe',
    strictness: 80,
    teaching: 90,
    marking: 70,
    attendance: 85,
    finalRating: 81.25 // This should be calculated based on the other ratings
  };
  return (
    <>
      <Card
        professorName={professorName}
        strictness={strictness}
        teaching={teaching}
        marking={marking}
        attendance={attendance}
        finalRating={finalRating}
        imageSrc={imageSrc} // Pass the image source prop
      />
      <CardOld
        professorName={professorData.professorName}
        strictness={professorData.strictness}
        teaching={professorData.teaching}
        marking={professorData.marking}
        attendance={professorData.attendance}
        finalRating={professorData.finalRating}
      />
    </>
  );
};

export default Rated;


