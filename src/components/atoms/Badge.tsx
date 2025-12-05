import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outline' | 'neutral';
  size?: 'sm' | 'md';
  className?: string;
  onClick?: () => void;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', size = 'md', className = '', onClick }) => {
  const base = "inline-flex items-center justify-center font-bold rounded shadow-sm transition-colors";
  
  const variants = {
    primary: "bg-brand-100 text-brand-800 dark:bg-brand-900/50 dark:text-brand-200 border border-brand-200 dark:border-brand-800",
    secondary: "bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border border-purple-200 dark:border-purple-800",
    success: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 border border-green-200 dark:border-green-800",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-200 border border-red-200 dark:border-red-800",
    info: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border border-blue-200 dark:border-blue-800",
    neutral: "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-gray-200 border border-gray-200 dark:border-slate-600",
    outline: "bg-transparent border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300"
  };

  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };

  const clickableStyles = onClick ? "cursor-pointer hover:opacity-80" : "";

  return (
    <span 
      className={`${base} ${variants[variant]} ${sizes[size]} ${clickableStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default Badge;