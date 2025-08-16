import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  periodSelector?: ReactNode;
  className?: string;
}

export function ChartCard({
  title,
  children,
  periodSelector,
  className = "",
}: ChartCardProps) {
  return (
    <div
      className={`
        bg-white rounded-xl p-6 shadow-sm
        border border-neutral-100
        ${className}
      `}
    >
      {/* Header com título e controles */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {periodSelector && (
          <div className="flex items-center space-x-2">{periodSelector}</div>
        )}
      </div>

      {/* Área do gráfico */}
      <div className="relative">{children}</div>
    </div>
  );
}

// Componente para seletor de período
interface PeriodSelectorProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export function PeriodSelector({
  value,
  onChange,
  options,
}: PeriodSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        text-sm border border-neutral-200 rounded-lg px-3 py-1.5
        bg-white text-neutral-700 focus:outline-none focus:ring-2
        focus:ring-agro-500 focus:border-agro-500
        transition-colors duration-200
      "
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
