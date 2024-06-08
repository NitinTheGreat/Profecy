'use client'
import React, { useState } from "react";
import "../styles/cardstyle.css";
import Image from "next/image";

const Card = ({
  professorName,
  strictness,
  teaching,
  marking,
  attendance,
  finalRating,
  imageSrc, // New prop for image source
}: {
  professorName: string;
  strictness: number;
  teaching: number;
  marking: number;
  attendance: number;
  finalRating: number;
  imageSrc: string; // Type for image source
}) => {
  const [showProgress, setShowProgress] = useState(false);

  const handleMouseEnter = () => {
    setShowProgress(true);
  };

  const handleMouseLeave = () => {
    setShowProgress(false);
  };

  // Calculate average progress
  const averageRating = (strictness + teaching + marking + attendance) / 4;

  return (
    <div className="bg-white h-[450px] w-[300px] m-4 p-6">
      <div className="h-full w-full bg-black px-4 border-collapse border-[6px] border-dotted border-red-700">
        <p className="text-white p-2 text-center">{professorName}</p>
        <div className="relative h-[70%] bg-red-700 border-t-black rounded-t-full">
          <Image
            src={imageSrc} // Use the prop for image source
            alt="Professor"
            width={300}
            height={300}
            className="absolute object-cover bottom-0"
          />
        </div>
        <div className="w-full flex flex-col p-2 text-white">
          <div className=" w-full flex flex-row text-white justify-between">
            <span>
              <p>{strictness}</p>
              <p>{teaching}</p>
            </span>
            <span>
              <p>{marking}</p>
              <p>{attendance}</p>
            </span>
          </div>
          <p className="w-full text-center">{finalRating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
