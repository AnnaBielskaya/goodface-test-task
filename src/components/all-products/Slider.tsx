"use client";

import React from "react";
import SliderMarks from "./SliderMarks";

const THUMB_WIDTH = 24;
const marks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const MIN_INDEX = 0;
const MAX_INDEX = marks.length - 1;

type MySliderProps = {
  value: number;
  onValueChange: (newValue: number) => void;
};

export default function MySlider({ value, onValueChange }: MySliderProps) {
  const valueIndex = marks.reduce(
    (prevIndex, currentMark, currentIndex) => {
      const prevDifference = Math.abs(marks[prevIndex] - value);
      const currentDifference = Math.abs(currentMark - value);
      return currentDifference < prevDifference ? currentIndex : prevIndex;
    },
    0
  );
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = Number(e.target.value);
    const newIpValue = marks[newIndex];
    onValueChange(newIpValue);
  };

  const progressPercent =
    MAX_INDEX > 0 ? (valueIndex / MAX_INDEX) * 100 : 0;
  const displayValue = value;

  return (
    <div className="w-full mt-10 relative">
      <div
        className="bg-brand-500 absolute -top-7 whitespace-nowrap rounded px-2 py-1 text-xs font-semibold text-white"
        style={{
          left: `calc(${progressPercent}% * (100% - ${THUMB_WIDTH}px) / 100% + ${
            THUMB_WIDTH / 2
          }px)`,
          transform: "translateX(-50%)",
        }}
      >
        {displayValue} IP
      </div>

      <div className="relative h-6 flex items-center">
        <div className="absolute w-full h-2 bg-gray-200 rounded-full"></div>
        <div
          className="absolute h-2 bg-brand-500 rounded-full"
          style={{ width: `${progressPercent}%` }}
        ></div>
        <input
          type="range"
          min={MIN_INDEX}
          max={MAX_INDEX}
          step={1}
          value={valueIndex}
          onChange={handleChange}
          className="slider"
        />
      </div>

      <SliderMarks thumbWidth={THUMB_WIDTH} marks={marks} />
    </div>
  );
}