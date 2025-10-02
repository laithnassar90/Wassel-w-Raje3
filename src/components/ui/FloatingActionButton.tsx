import { ReactNode } from 'react';

interface FloatingActionButtonProps {
  onClick: () => void;
  icon: ReactNode;
  label: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const FloatingActionButton = ({ 
  onClick, 
  icon, 
  label, 
  variant = 'primary',
  size = 'md',
  className = '' 
}: FloatingActionButtonProps) => {
  const baseClasses = "fixed bottom-6 right-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
  };

  const sizeClasses = {
    sm: "h-12 w-12",
    md: "h-14 w-14", 
    lg: "h-16 w-16"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      title={label}
    >
      {icon}
    </button>
  );
};