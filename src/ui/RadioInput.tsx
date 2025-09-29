import React from "react";

export interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  badge?: string | null;
  className?: string;
}

const RadioInput = React.forwardRef<HTMLInputElement, RadioInputProps>(
  ({ className, label, badge, ...props }, ref) => {
    const isSelected = props.checked || false;

    return (
      <label
        className={`radio-input ${
          isSelected ? "radio-input-selected" : "radio-input-unselected"
        } ${className || ""}`}
      >
        <input type="radio" ref={ref} className="sr-only" {...props} />

        <span
          className={`radio-circle ${
            isSelected ? "radio-circle-selected" : "radio-circle-unselected"
          }`}
        />
        <span className="radio-label">{label}</span>

        {badge && <span className="radio-badge">{badge}</span>}
      </label>
    );
  }
);

RadioInput.displayName = "RadioInput";

export { RadioInput };
