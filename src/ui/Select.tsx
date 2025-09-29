"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Option = {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
};

interface SelectProps {
  hint?: string;
  options: Option[];
  value?: Option;
  onChange?: (value: Option) => void;
}

const DROPDOWN_HEIGHT = 200; 

export default function Select({
  hint,
  options,
  value,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const selectRef = useRef<HTMLDivElement>(null);
  const selectedOption = value ?? options[0];
  const handleToggle = () => {
    if (!isOpen && selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.bottom + DROPDOWN_HEIGHT > windowHeight && rect.top > DROPDOWN_HEIGHT) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    }
    setIsOpen((prev) => !prev);
  };
  
  const handleSelect = (option: Option) => {
    if (option.disabled) return;
    onChange?.(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  return (
    <div ref={selectRef}>
      <div className="relative">
        <button
          type="button"
          onClick={handleToggle} 
          className={`select ${
            selectedOption.disabled ? "cursor-not-allowed bg-grey-100" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            {selectedOption.icon && (
              <Image
                src={selectedOption.icon}
                alt={selectedOption.id}
                width={18}
                height={18}
                className="rounded-sm"
              />
            )}
            <span className="text-body2">{selectedOption.label}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-grey-700 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul
            className={`select-options-box
              ${direction === 'down' ? 'top-full mt-1' : 'bottom-full mb-1'}
            `}
          >
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelect(option)}
                className="select-option"
              >
                {option.icon && (
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={18}
                    height={18}
                    className="rounded-sm"
                  />
                )}
                <span>{option.label}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {hint && <p className="select-hint">{hint}</p>}
    </div>
  );
}