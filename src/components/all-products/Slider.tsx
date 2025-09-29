"use client";

import React, { useState } from "react";
import SliderMarks from "./SliderMarks";

const THUMB_WIDTH = 24;

const marks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const MIN_INDEX = 0;
const MAX_INDEX = marks.length - 1;

export default function MySlider() {
  const [valueIndex, setValueIndex] = useState(marks.indexOf(50));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueIndex(Number(e.target.value));
  };

  const progressPercent = MAX_INDEX > 0 ? (valueIndex / MAX_INDEX) * 100 : 0;
  const displayValue = marks[valueIndex];

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
          className="
            relative w-full appearance-none bg-transparent cursor-pointer z-10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-6
            [&::-webkit-slider-thumb]:rounded-sm
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-none
            [&::-webkit-slider-thumb]:border
            [&::-webkit-slider-thumb]:border-brand-500
          "
        />
      </div>

      <SliderMarks thumbWidth={THUMB_WIDTH} marks={marks} />
    </div>
  );
}
