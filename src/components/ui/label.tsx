import React from 'react';

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({ children, className = '', ...props }) => (
  <label
    className={`text-sm font-medium text-gray-700 ${className}`}
    {...props}
  >
    {children}
  </label>
);