interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const Logo = ({ size = 'md', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  return (
    <div className={`${sizeClasses[size]} overflow-hidden rounded-xl bg-white p-1 ${className}`}>
      <img
        src="https://c.animaapp.com/mfzum9yxwZ0GbV/img/logo-wassel.png"
        alt="Wassel Logo"
        className="h-full w-full object-contain"
      />
    </div>
  );
};
