"use client";

import { useState } from "react";
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

export default function Select({
  hint,
  options,
  value,
  onChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option>(value ?? options[0]);

  const handleSelect = (option: Option) => {
    if (option.disabled) return;
    setSelected(option);
    onChange?.(option);
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`cursor-pointer flex w-full items-center justify-between rounded-md border border-grey-300 bg-white px-3 py-[10] text-left text-sm ${
            selected.disabled ? "cursor-not-allowed bg-grey-100" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            {selected.icon && (
              <Image
                src={selected.icon}
                alt={selected.id}   
                width={18}
                height={18}
                className="rounded-sm"
              />
            )}
            <span>{selected.label}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-grey-700 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-grey-200 bg-white shadow-md">
            {options.map((option) => (
              <li
                key={option.id}
                onClick={() => handleSelect(option)}
                className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm ${
                  option.disabled
                    ? "cursor-not-allowed opacity-50"
                    : "hover:bg-brand-50 hover:text-brand-600"
                }`}
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

      {hint && <p className="mt-1 text-xs text-grey-500">{hint}</p>}
    </div>
  );
}
