"use client";

import Image from "next/image";

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
          <div key={index} className="flex items-center gap-2">
            <Image
              src="/icons/circle-check-filled.svg"
              alt="All products logo"
              width={20}
              height={20}
            />
            <span className="text-body2 text-grey-600">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
