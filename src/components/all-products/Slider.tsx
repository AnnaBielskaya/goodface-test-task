"use client";

import React, { useEffect } from "react";

const THUMB_WIDTH = 24;
const marks = [10, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const MIN_INDEX = 0;
const MAX_INDEX = marks.length - 1;

function SliderMarks({
  thumbWidth,
  marks,
}: {
  thumbWidth: number;
  marks: number[];
}) {
  return (
    <div className="relative w-full mt-1 h-5">
      {marks.map((mark, index) => {
        const percent = (index / (marks.length - 1)) * 100;
        const style = {
          left: `calc(${percent}% * (100% - ${thumbWidth}px) / 100% + ${
            thumbWidth / 2
          }px)`,
          transform: "translateX(-50%)",
        };
        return (
          <span
            key={mark}
            className="absolute text-body2 text-grey-500"
            style={style}
          >
            {mark}
          </span>
        );
      })}
    </div>
  );
}

type MySliderProps = {
  value: number;
  onValueChange: (newValue: number) => void;
};

export default function MySlider({ value, onValueChange }: MySliderProps) {
  useEffect(() => {
    if (value === 0) {
      onValueChange(marks[0]);
    }
  }, [value, onValueChange]);

  const valueForCalculation = value === 0 ? marks[0] : value;

  const valueIndex = marks.reduce((prevIndex, currentMark, currentIndex) => {
    const prevDifference = Math.abs(marks[prevIndex] - valueForCalculation);
    const currentDifference = Math.abs(currentMark - valueForCalculation);
    return currentDifference < prevDifference ? currentIndex : prevIndex;
  }, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIndex = Number(e.target.value);
    const newIpValue = marks[newIndex];
    onValueChange(newIpValue);
  };

  const progressPercent = MAX_INDEX > 0 ? (valueIndex / MAX_INDEX) * 100 : 0;
  const displayValue = value;

  return (
    <div className="slider-container">
      <div
        className="slider-tooltip"
        style={{
          left: `calc(${progressPercent}% * (100% - ${THUMB_WIDTH}px) / 100% + ${
            THUMB_WIDTH / 2
          }px)`,
          transform: "translateX(-50%)",
        }}
      >
        {displayValue} IP
      </div>

      <div className="slider-track-container">
        <div className="slider-track-background"></div>
        <div
          className="slider-track-progress"
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

