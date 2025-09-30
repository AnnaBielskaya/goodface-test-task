"use client";

import { RadioInput } from "@/ui/RadioInput";

const subscriptionOptions = [
  { id: "1m", value: 1, label: "1 month", badge: null },
  { id: "3m", value: 3, label: "3 months", badge: null },
  { id: "12m", value: 12, label: "12 months", badge: "Save 20%" },
];

type SubscriptionSelectorProps = {
  value: number;
  onValueChange: (value: number) => void;
};

export default function SubscriptionSelector({
  value,
  onValueChange,
}: SubscriptionSelectorProps) {

  return (
    <div>
      <h3 className="text-label text-grey-800 mb-2">
        Select subscription cycle
      </h3>

      <div className="relative space-y-2">
        {subscriptionOptions.map((option) => (
          <RadioInput
            key={option.id}
            id={option.id}
            name="subscription-cycle"
            value={option.id}
            label={option.label}
            badge={option.badge}
            checked={value === option.value}
            onChange={() => onValueChange(option.value)}
          />
        ))}
      </div>
    </div>
  );
}