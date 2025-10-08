interface LogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'sm', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    xs: 'h-7',
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
    xl: 'h-16'
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="https://c.animaapp.com/mfzum9yxwZ0GbV/img/logo-wassel.png"
        alt="Wassel"
        className={`${sizeClasses[size]} w-auto`}
      />
      {showText && (
        <div className="flex flex-col gap-0.5">
          <h3 className="text-base font-medium text-primary leading-none">Wassel</h3>
          <p className="text-xs text-muted-foreground leading-none">واصل</p>
        </div>
      )}
    </div>
  );
}
