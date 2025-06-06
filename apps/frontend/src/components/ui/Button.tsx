import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  children: React.ReactNode;
}

export function Button({
  color = '#1b5e1f',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`w-3/4 mx-auto py-3 px-4 rounded-lg text-white font-medium transition-all hover:brightness-110 ${className}`}
      style={{ backgroundColor: color }}
      {...props}
    >
      {children}
    </button>
  );
}
