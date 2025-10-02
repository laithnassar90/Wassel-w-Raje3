import React from 'react';

interface AvatarProps {
  children: React.ReactNode;
  className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

interface AvatarFallbackProps {
  children: React.ReactNode;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ children, className = '' }) => (
  <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>
    {children}
  </div>
);

export const AvatarImage: React.FC<AvatarImageProps> = ({ className = '', ...props }) => (
  <img className={`aspect-square h-full w-full object-cover ${className}`} {...props} />
);

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ children, className = '' }) => (
  <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 text-gray-600 ${className}`}>
    {children}
  </div>
);