import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
}

export function Button({ icon, label, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex cursor-pointer justify-center gap-2 rounded border border-grey-300 bg-white px-3 py-1 text-sm font-medium text-grey-900 hover:bg-grey-50 transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
