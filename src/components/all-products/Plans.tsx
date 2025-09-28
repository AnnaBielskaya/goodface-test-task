"use client";

import { PlanLabel } from "@/ui/PlanLabel";

const plans = [
  "Unlimited Concurrent Sessions",
  "Country, Region, City, or ISP Targeting",
  "Automatic Proxy Rotation",
  "HTTP, SOCKS5, and UDP support",
  "Proxy Servers in 195+ Countries",
  "Email and Chat Support",
  "API access",
  "Custom Responses for Your Proxy Requests",
];

export default function Plans() {
  return (
    <div>
      <h2 className="text-h6 mb-4 text-grey-800">All plans include</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
        {plans.map((feature, index) => (
          <PlanLabel key={index} text={feature} />
        ))}
      </div>
    </div>
  );
}
