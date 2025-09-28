"use client";

import { RadioInput } from "@/ui/RadioInput";
import { useState } from "react";

const subscriptionOptions = [
  { id: "1m", label: "1 month", badge: null },
  { id: "3m", label: "3 months", badge: null },
  { id: "12m", label: "12 months", badge: "Save 20%" },
];

export default function SubscriptionSelector() {
  const [selectedCycle, setSelectedCycle] = useState("3m");

  return (
    <div>
      <h3 className="text-subtitle2 text-grey-800 mb-2">
        Select subscription cycle
      </h3>

      <div className="space-y-2">
        {subscriptionOptions.map((option) => (
          <RadioInput
            key={option.id}
            id={option.id}
            name="subscription-cycle"
            value={option.id}
            label={option.label}
            badge={option.badge}
            checked={selectedCycle === option.id}
            onChange={() => setSelectedCycle(option.id)}
          />
        ))}
      </div>
    </div>
  );
}