import React from 'react';

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
        className={`flex cursor-pointer items-center rounded p-3 ${
          isSelected
            ? "bg-brand-50 ring-2 ring-brand-500"
            : "ring-1 ring-grey-300 hover:bg-brand-50 hover:ring-brand-500"
        } ${className || ''}`}
      >
        <input type="radio" ref={ref} className="sr-only" {...props} />

        <span
          className={`border flex h-4 w-4 items-center justify-center rounded-full transition-colors ${
            isSelected
              ? "border-6 border-brand-500"
              : "border border-grey-300"
          }`}
        />
        <span className="mx-2 text-subtitle2 text-grey-800">
          {label}
        </span>
        {badge && (
          <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700">
            {badge}
          </span>
        )}
      </label>
    );
  }
);
RadioInput.displayName = 'RadioInput';

export { RadioInput };