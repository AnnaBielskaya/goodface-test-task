"use client";

import { Button } from "@/ui/Button";
import { ChevronUp } from "lucide-react";
import { useState } from "react";
import { EditIcon } from "@/assets/icons/EditIcon";
import IpSlider from "./IpSlider";

const bundleDiscounts = [
  { range: "10-24", price: "3.00" },
  { range: "25-49", price: "2.80" },
  { range: "50-99", price: "2.50" },
  { range: "100-249", price: "2.25" },
];

export default function IpSelector() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-subtitle2 text-grey-800">Select number of IPs</p>
        <p className="text-subtitle2 text-grey-500">
          Choose the perfect quantity of IPs for your needs effortlessly
        </p>
      </div>
      <div>
        <button
          className="toggle-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-subtitle2 text-grey-800">Bundle discounts</p>
          <ChevronUp
            className={`h-5 w-5 text-grey-500 transition-transform ${
              isOpen ? "" : "rotate-180"
            }`}
          />
        </button>

        {isOpen && (
          <div className="basic-table">
            <div className="cell-header">
              IPs
            </div>

            {bundleDiscounts.map((discount, idx) => (
              <div
                key={discount.range}
                className={`cell`}
              >
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
      <IpSlider />
      <Button
        className="w-fit text-brand-500"
        icon={<EditIcon />}
        label="Enter a custom quantity"
      />{" "}
    </div>
  );
}

function CustomQuantityBlock() {
  <div className="space-y-4">
    <div className="space-y-1">
      <p className="text-subtitle2 text-grey-800">Custom quantity</p>
      <input className="input input-md" />
    </div>

    <Button className="w-fit text-brand-500" label="Select from the range" />
  </div>;
}
