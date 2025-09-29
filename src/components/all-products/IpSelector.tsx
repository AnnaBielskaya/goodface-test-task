"use client";

import { Button } from "@/ui/Button";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { EditIcon } from "@/assets/icons/EditIcon";
import CustomSlider from "./Slider";
import { bundleDiscounts } from "@/config/pricing";

function CustomQuantityBlock({
  value,
  onValueChange,
  onSelectRangeClick,
}: {
  value: number;
  onValueChange: (value: number) => void;
  onSelectRangeClick: () => void;
}) {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      let numValue = Number(inputValue);
      if (numValue > 1000) {
        numValue = 1000;
      }
      onValueChange(numValue);
    }
  };

  const handleBlur = () => {
    if (value && value < 10) {
      onValueChange(10);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <p className="text-subtitle2 text-grey-800">Custom quantity</p>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className="input input-md"
          placeholder="10-1000" 
          value={value || ""}
          onChange={handleQuantityChange}
          onBlur={handleBlur} 
        />
      </div>
      <Button
        className="w-fit text-brand-500"
        label="Select from the range"
        onClick={onSelectRangeClick}
      />
    </div>
  );
}

type IpSelectorProps = {
  value: number;
  onValueChange: (newValue: number) => void;
};

export default function IpSelector({ value, onValueChange }: IpSelectorProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [inputMode, setInputMode] = useState<"slider" | "manual">("slider");

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-subtitle2 text-grey-800">Select number of IPs</p>
        <p className="text-subtitle2 text-grey-500">
          Choose the perfect quantity of IPs for your needs effortlessly
        </p>
      </div>
      <div>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
          <p className="text-subtitle2 text-grey-800">Bundle discounts</p>
          <ChevronUp
            className={`h-5 w-5 text-grey-500 transition-transform ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </button>
        {isOpen && (
          <div className="basic-table">
            <div className="cell-header">IPs</div>
            {bundleDiscounts.map((discount, idx) => (
              <div key={discount.range} className={`cell`}>
                {discount.range}
              </div>
            ))}
            <div className="py-2 px-3 text-left text-body2 text-grey-700">
              Price per IP
            </div>
            {bundleDiscounts.map((discount, idx) => (
              <div
                key={`${discount.range}-price`}
                className={`py-2 px-3 text-right text-body2 text-grey-700`}
              >
                ${discount.price}
              </div>
            ))}
          </div>
        )}
      </div>

      {inputMode === "slider" ? (
        <div className="space-y-4">
          <CustomSlider value={value} onValueChange={onValueChange} />
          <Button
            className="w-fit text-brand-500"
            icon={<EditIcon />}
            label="Enter a custom quantity"
            onClick={() => setInputMode("manual")}
          />
        </div>
      ) : (
        <CustomQuantityBlock
          value={value}
          onValueChange={onValueChange}
          onSelectRangeClick={() => setInputMode("slider")}
        />
      )}
    </div>
  );
}