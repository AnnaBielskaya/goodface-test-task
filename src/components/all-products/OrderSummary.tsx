"use client";

import { useState } from "react";
import { Button } from "@/ui/Button";
import { PlanLabel } from "@/ui/PlanLabel";

function PlanDetails({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex flex-row w-full justify-between">
      <p className="text-body2 text-grey-600">{label}</p>
      <p className="text-body2 text-grey-800">{value}</p>
    </div>
  );
}

type OrderSummaryProps = {
  quantity: number;
  location: string;
  pricePerIP: number;
  subscriptionPeriod: number;
  total: number;
};

export default function OrderSummary({
  quantity,
  location,
  pricePerIP,
  subscriptionPeriod,
  total,
}: OrderSummaryProps) {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-h5 text-grey-800">Order summary</h3>
      <div className="flex flex-col gap-2">
        <p className="text-subtitle1 text-grey-800">Datacenter Proxies</p>
        <PlanLabel text="3-day Trial" />
        <PlanLabel text="Customer Success Manager" />
      </div>
      <div className="flex flex-col gap-2">
        <PlanDetails label="Quantity of IP" value={`${quantity} IPs`} />
        <PlanDetails label="Location" value={location} />
        <PlanDetails label="Price per IP" value={`$${pricePerIP.toFixed(2)}`} />
        <PlanDetails
          label="Subscription period"
          value={`${subscriptionPeriod} ${
            subscriptionPeriod === 1 ? "month" : "months"
          }`}
        />
      </div>
      <div className="w-full flex flex-row gap-2 mt-3">
        <input
          placeholder="Add discount code"
          className="input"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <Button
          className="w-fit"
          label="Apply"
          disabled={!discountCode.trim()}
        />
      </div>

      <div className="border-t border-grey-300 flex items-center justify-between pt-4">
        <p>Total</p>
        <p className="text-h4 text-grey-800">${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
