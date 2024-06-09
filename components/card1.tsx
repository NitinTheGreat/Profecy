import React, { useState } from "react";
import Image from "next/image";

const Card1 = ({
  name,
  strict,
  skill,
  marks,
  ap,
  fit,
  onSubmit, // onSubmit prop for form submission
}: {
  name: string;
  strict: number;
  skill: number;
  marks: number;
  ap: number;
  fit: number;
  onSubmit: () => void; // Type for onSubmit prop
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // Function to handle radio button selection
  const handleSelection = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="bg-white h-[450px] w-[300px] m-4 p-6">
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
          {/* Form for radio buttons */}
          <form onSubmit={onSubmit}>
            <div className="w-full flex flex-row text-white justify-between">
              <span>
                {/* Radio button for Strictness */}
                <label>
                  Strictness: {strict}
                  <input
                    type="radio"
                    name="parameter"
                    value="strictness"
                    checked={selectedValue === "strictness"}
                    onChange={() => handleSelection("strictness")}
                  />
                </label>
                {/* Radio button for Skill */}
                <label>
                  Skill: {skill}
                  <input
                    type="radio"
                    name="parameter"
                    value="skill"
                    checked={selectedValue === "skill"}
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
                    checked={selectedValue === "marks"}
                    onChange={() => handleSelection("marks")}
                  />
                </label>
              </span>
              <span>
                {/* Radio button for AP */}
                <label>
                  AP: {ap}
                  <input
                    type="radio"
                    name="parameter"
                    value="ap"
                    checked={selectedValue === "ap"}
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
                    checked={selectedValue === "fit"}
                    onChange={() => handleSelection("fit")}
                  />
                </label>
              </span>
            </div>
            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card1;
