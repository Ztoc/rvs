import React from 'react';
import ArrowUpRight from '@/components/icons/ArrowUpRight';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  withArrow?: boolean;
}

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  withArrow = false
}: ButtonProps) => {
  // Define styles based on variant and size
  const variantStyles = {
    primary: 'bg-rvs-green text-white',
    secondary: 'bg-rvs-yellow text-black',
    outline: 'bg-transparent border border-white text-white',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-[30px] py-[18px] text-lg',
  };
  
  return (
    <button 
      onClick={onClick}
      className={`rounded-[30px] font-bold flex items-center gap-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
      {withArrow && <ArrowUpRight color={variant === 'primary' ? 'white' : 'black'} />}
    </button>
  );
};

export default Button;
