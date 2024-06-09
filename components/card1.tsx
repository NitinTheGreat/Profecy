import React, { useState } from "react";
import Image from "next/image";

const Card1 = ({
  name,
  strict,
  skill,
  marks,
  ap,
  fit,
  setSelectedValue, // onSubmit prop for form submission
}: {
  name: string;
  strict: number;
  skill: number;
  marks: number;
  ap: number;
  fit: number;
  setSelectedValue: (value: string) => void; // Type for onSubmit prop
}) => {
  // Function to handle radio button selection
  const handleSelection = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className=" h-[450px] w-[300px] m-4 p-6">
      <div className="h-full w-full bg-black px-4 border-collapse border-[6px] border-dotted border-red-700">
        <p className="text-white p-2 text-center">{name}</p>
        <div className="relative h-[70%] bg-red-700 border-t-black rounded-t-full">
          {/* Image component */}
          <Image
            src="/images/profile.jpg"
            alt="Professor"
            width={300}
            height={300}
            className="absolute object-cover bottom-0"
          />
        </div>
        <div className="w-full flex flex-col p-2 text-white">
          <div className="w-full flex flex-row text-white justify-between">
            <span>
              {/* Radio button for Strictness */}
              <label>
                Strictness: {strict}
                <input
                  type="radio"
                  name="parameter"
                  value="strictness"
                  onChange={() => handleSelection("strictness")}
                />
              </label>
            </span>
          </div>
          <div className="flex flex-row justify-between">
            <label>
              Skill: {skill}
              <input
                type="radio"
                name="parameter"
                value="skill"
                onChange={() => handleSelection("skill")}
              />
            </label>
            {/* Radio button for Marks */}
            <label>
              Marks: {marks}
              <input
                type="radio"
                name="parameter"
                value="marks"
                onChange={() => handleSelection("marks")}
              />
            </label>
          </div>
          <div className="flex flex-row justify-between">
            <label>
              AP: {ap}
              <input
                type="radio"
                name="parameter"
                value="ap"
                onChange={() => handleSelection("ap")}
              />
            </label>
            {/* Radio button for FIT */}
            <label>
              FIT: {fit}
              <input
                type="radio"
                name="parameter"
                value="fit"
                onChange={() => handleSelection("fit")}
              />
            </label>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              border: "none",
              marginTop: "15px",
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card1;