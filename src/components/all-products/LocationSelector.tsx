"use client";

import Select from "@/ui/Select";

type CountryOption = {
  id: string;
  label: string;
  icon?: string; 
};

const countries: CountryOption[] = [
  { id: "uk", label: "United Kingdom", icon: "/flags/uk.svg" },
  { id: "us", label: "United States", icon: "/flags/us.svg" },
  { id: "de", label: "Germany", icon: "/flags/de.svg" },
  { id: "fr", label: "France", icon: "/flags/fr.svg" },
  { id: "es", label: "Spain", icon: "/flags/es.svg" },
  { id: "br", label: "Brazil", icon: "/flags/br.svg" },
  { id: "cn", label: "China", icon: "/flags/cn.svg" },
];

type LocationSelectorProps = {
  value: string;
  onValueChange: (value: string) => void;
};

export default function LocationSelector({
  value,
  onValueChange,
}: LocationSelectorProps) {
  const selectedCountry = countries.find((c) => c.label === value) || countries[0];

  return (
    <div>
      <h3 className="text-subtitle2 text-grey-800 mb-2">Select location</h3>

      <Select
        options={countries}
        value={selectedCountry}
        onChange={(option: CountryOption) => onValueChange(option.label)}
      />
    </div>
  );
}