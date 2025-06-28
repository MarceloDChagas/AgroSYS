import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  children,
  className = "",
}: PageHeaderProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 ${className}`}
    >
      <div>
        <h2 className="text-xl font-display font-bold text-agro-700">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-agro-600 mt-1 font-semibold">{subtitle}</p>
        )}
        <div className="mt-2 w-12 h-1 bg-agro-500 rounded"></div>
      </div>

      {children && <div className="flex items-center gap-2">{children}</div>}
    </div>
  );
}
