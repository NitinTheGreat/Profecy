'use client';
import React, { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    // Example fetch call - not actually used here
    const fetchProfessors = async () => {
      try {
        const response = await fetch('https://profbattle.onrender.com/faculty', {
          method: 'GET',
          headers: {
            'Authorization': 'Token 1da8997b352c4e32fd3783d5ae8a6752196d87b7'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data); // Log the data for debugging
      } catch (error) {
        console.error('Failed to fetch professors:', error);
      }
    };

    fetchProfessors();
  }, []);

  return (
    <div>
      Hello
    </div>
  );
};

export default Page;
