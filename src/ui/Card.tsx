import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  const finalClassName = `flex flex-col gap-6 rounded-lg border border-grey-200 bg-white p-6 ${className || ''}`;

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}