"use client";

import Image from "next/image";

type PlanLabelProps = {
  text: string;
};

export function PlanLabel({ text }: PlanLabelProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/icons/circle-check-filled.svg"
        alt="All products logo"
        width={20}
        height={20}
      />
      <span className="text-body2 text-grey-600">{text}</span>
    </div>
  );
}
