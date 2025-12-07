import React, { forwardRef } from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  highlight?: boolean; // For "popular" or active states
  noPadding?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({
  children,
  className = '',
  hoverEffect = false,
  highlight = false,
  noPadding = false,
  ...props
}, ref) => {
  const base = "bg-white dark:bg-slate-800 rounded-xl border transition-all duration-300";
  const padding = noPadding ? "" : "p-6 md:p-8";

  // Dynamic border and shadow based on highlight state
  const border = highlight
    ? "border-brand-500 dark:border-brand-500 shadow-xl shadow-brand-900/20"
    : "border-gray-100 dark:border-slate-700 shadow-sm";

  const hover = hoverEffect
    ? "hover:shadow-lg hover:-translate-y-1 hover:border-brand-200 dark:hover:border-slate-600"
    : "";

  return (
    <div
      ref={ref}
      className={`${base} ${padding} ${border} ${hover} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;