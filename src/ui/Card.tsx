import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  const finalClassName = `card ${className || ''}`;

  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
}