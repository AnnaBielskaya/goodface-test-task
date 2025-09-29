import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
}

export function Button({ icon, label, className, ...props }: ButtonProps) {
  const baseStyles = "btn";

  const finalClassName = `${baseStyles} ${className || ""}`.trim();

  return (
    <button className={finalClassName} {...props}>
      {icon}
      <span>{label}</span>
    </button>
  );
}
