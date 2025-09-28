"use client";

import Select from "@/ui/Select";

const countries = [
  { id: "uk", label: "United Kingdom", icon: "/flags/uk.svg" },
  { id: "us", label: "United States", icon: "/flags/us.svg" },
  { id: "de", label: "Germany", icon: "/flags/de.svg" },
  { id: "fr", label: "France", icon: "/flags/fr.svg" },
  { id: "es", label: "Spain", icon: "/flags/es.svg" },
  { id: "br", label: "Brazil", icon: "/flags/br.svg" },
  { id: "cn", label: "China", icon: "/flags/cn.svg" },
];

export default function LocationSelector() {
  return (
    <div>
      <h3 className="text-subtitle2 text-grey-800 mb-2">Select location</h3>

      <Select
        options={countries}
        value={countries[0]}
      />
    </div>
  );
}
