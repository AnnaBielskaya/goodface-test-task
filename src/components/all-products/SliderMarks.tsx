import React from 'react';

type SliderMarksProps = {
  marks: number[];
  thumbWidth: number;
};

const SliderMarks: React.FC<SliderMarksProps> = ({ marks, thumbWidth }) => {
  const totalMarks = marks.length - 1;

  return (
    <div className="relative w-full h-6 text-xs text-gray-600 mt-1">
      <div
        className="relative h-full"
        style={{
          width: `calc(100% - ${thumbWidth}px)`,
          margin: '0 auto',
        }}
      >
        {marks.map((mark, index) => {
          const positionPercent = totalMarks > 0 ? (index / totalMarks) * 100 : 0;
          
          let transformStyle = 'translateX(-50%)';

          if (index === 0) {
            transformStyle = `translateX(-${thumbWidth / 2}px)`;
          } else if (index === totalMarks) {
            transformStyle = `translateX(calc(-100% + ${thumbWidth / 2}px))`;
          }

          return (
            <span
              key={mark}
              className="absolute whitespace-nowrap"
              style={{
                left: `${positionPercent}%`,
                transform: transformStyle,
              }}
            >
              {mark}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SliderMarks;