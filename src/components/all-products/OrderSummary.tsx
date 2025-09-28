"use client";

import { PlanLabel } from "@/ui/PlanLabel";

export default function OrderSummary() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-h5 text-grey-800">Order summary</h3>
      <div className="flex flex-col gap-2">
        <p className="text-subtitle1 text-grey-800">Datacenter Proxies</p>

        <PlanLabel text="3-day Trial" />
        <PlanLabel text="Customer Success Manager" />
      </div>
    </div>
  );
}
