import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green-button' | 'white-button';
  className?: string;
}

export function Button({
  variant = 'green-button',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'w-3/4 mx-auto py-3 px-4 rounded-full font-medium transition-all';
  const variants = {
    'green-button': 'bg-[#1b5e1f] text-white hover:bg-[#155219]',
    'white-button':
      'bg-white text-[#1b5e1f] border-2 border-[#1b5e1f] hover:bg-[#f3f3f3] hover:text-[#1b5e1f]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
