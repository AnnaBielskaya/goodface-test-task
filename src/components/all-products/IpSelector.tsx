"use client";

import { Button } from "@/ui/Button";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

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
          className="flex flex-row gap-1 items-center cursor-pointer"
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
          <div className="mt-2 border border-grey-200 rounded grid grid-cols-[100px_repeat(4,minmax(0,1fr))] text-center text-sm overflow-hidden">
            <div className="bg-grey-100 py-2 px-3 text-left text-subtitle2 text-grey-500 border-b border-grey-200">
              IPs
            </div>

            {bundleDiscounts.map((discount, idx) => (
              <div
                key={discount.range}
                className={`bg-grey-100 py-2 px-3 text-right text-subtitle2 text-grey-500`}
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

      <Button label="Enter a custom quantity" />
    </div>
  );
}
