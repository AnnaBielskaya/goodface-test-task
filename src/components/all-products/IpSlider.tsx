import { useState } from "react";

function ThumbSvg() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 1.5C3 2.32843 2.32843 3 1.5 3C0.671573 3 0 2.32843 0 1.5C0 0.671573 0.671573 0 1.5 0C2.32843 0 3 0.671573 3 1.5Z" fill="#D2D6DB"/>
      <path d="M10 1.5C10 2.32843 9.32843 3 8.5 3C7.67157 3 7 2.32843 7 1.5C7 0.671573 7.67157 0 8.5 0C9.32843 0 10 0.671573 10 1.5Z" fill="#D2D6DB"/>
      <path d="M10 8.5C10 9.32843 9.32843 10 8.5 10C7.67157 10 7 9.32843 7 8.5C7 7.67157 7.67157 7 8.5 7C9.32843 7 10 7.67157 10 8.5Z" fill="#D2D6DB"/>
      <path d="M3 8.5C3 9.32843 2.32843 10 1.5 10C0.671573 10 0 9.32843 0 8.5C0 7.67157 0.671573 7 1.5 7C2.32843 7 3 7.67157 3 8.5Z" fill="#D2D6DB"/>
    </svg>
  );
}

export default function IpSlider() {
  const [value, setValue] = useState(100);
  const min = 10;
  const max = 1000;
  const percent = ((value - min) / (max - min)) * 100;

  const labels = [10,50,100,200,300,400,500,600,700,800,900,1000];

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const track = e.currentTarget.getBoundingClientRect();
    let newPercent = ((e.clientX - track.left) / track.width) * 100;
    newPercent = Math.min(100, Math.max(0, newPercent));
    const newValue = Math.round(min + ((max - min) * newPercent) / 100);
    setValue(newValue);
  };

  return (
    <div className="relative w-full py-10">
      <div
        className="relative h-2 w-full rounded-full bg-grey-100 cursor-pointer"
        onClick={handleTrackClick}
      >
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-brand-400"
          style={{ width: `${percent}%` }}
        ></div>

        <div
          className="absolute top-1/2 -translate-y-1/2 w-[22px] h-[22px] border-1 border-[#5547EB] rounded-[4px] bg-white flex items-center justify-center cursor-pointer"
          style={{ left: `calc(${percent}% - 11px)` }}
          onMouseDown={(e) => {
            const sliderRect = (e.currentTarget.parentNode as HTMLDivElement).getBoundingClientRect();
            const move = (ev: MouseEvent) => {
              let newPercent = ((ev.clientX - sliderRect.left) / sliderRect.width) * 100;
              newPercent = Math.min(100, Math.max(0, newPercent));
              const newValue = Math.round(min + ((max - min) * newPercent) / 100);
              setValue(newValue);
            };
            const up = () => {
              window.removeEventListener("mousemove", move);
              window.removeEventListener("mouseup", up);
            };
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseup", up);
          }}
        >
          <ThumbSvg />
        </div>
      </div>

      <div className="absolute left-0 mb-2 flex w-full justify-between translate-y-full">
        {labels.map((l) => (
          <span key={l} className="text-center text-xs text-grey-500">{l}</span>
        ))}
      </div>
    </div>
  );
}
