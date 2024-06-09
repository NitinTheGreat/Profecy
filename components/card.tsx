import React, { useState } from "react";
// import styles from "../styles/cardstyle.module.css";
import styles from "../styles/cardstyle.module.css";
import Image from "next/image";

const Card = ({
  name,
  strict,
  skill,
  marks,
  ap,
  fit,
  imageSrc, // New prop for image source
}: {
  name: string;
  strict: number;
  skill: number;
  marks: number;
  ap: number;
  fit: number;
  imageSrc: string; // Type for image source
}) => {
  const [showProgress, setShowProgress] = useState(false);

  const handleMouseEnter = () => {
    setShowProgress(true);
  };

  const handleMouseLeave = () => {
    setShowProgress(false);
  };

  return (
      <div className="bg-white text-white h-[450px] w-[300px] m-4 p-6">
      <div className="h-full w-full bg-black px-4 border-collapse border-[6px] border-dotted border-red-700">
        <p className="text-white p-2 text-center">{name}</p>
        <div className="relative h-[70%] bg-red-700 border-t-black rounded-t-full">
          <img
            src={imageSrc} // Use the prop for image source
            alt="Professor"
            width={300}
            height={300}
            className="absolute object-cover bottom-0"
          />
        </div>
        <div className="w-full flex flex-col p-2 text-white">
          <div className="w-full flex flex-row justify-between">
            <p>Strictness: {strict}</p>
          </div>
          <div className="w-full flex flex-row justify-between">
            <p>Skill: {skill}</p>
            <p>Marks: {marks}</p>
          </div>
          <div className="w-full flex flex-row justify-between">
            <p>AP: {ap}</p>
            <p>FIT: {fit}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;