import type { ReactNode } from "react";

interface DonutChartData {
  category: string;
  value: number;
  color: string;
}

interface DonutChartProps {
  data: DonutChartData[];
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function DonutChart({
  data,
  size = 120,
  strokeWidth = 12,
  className = "",
}: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let currentOffset = 0;

  return (
    <div className={`relative ${className}`}>
      <svg width={size} height={size} className="transform -rotate-90">
        {data.map((item, index) => {
          const percentage = (item.value / total) * 100;
          const strokeDasharray = (percentage / 100) * circumference;
          const strokeDashoffset = circumference - strokeDasharray;
          const offset = currentOffset;
          currentOffset += strokeDasharray;

          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="none"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              style={{
                transformOrigin: "center",
                transform: `rotate(${(offset / circumference) * 360}deg)`,
              }}
            />
          );
        })}
      </svg>

      {/* Centro do gráfico com total */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-bold text-neutral-900">{total}%</div>
          <div className="text-xs text-neutral-500">Total</div>
        </div>
      </div>
    </div>
  );
}
