import type { ReactNode } from "react";

interface ActionButton {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
  icon?: ReactNode;
  disabled?: boolean;
}

interface ActionButtonsProps {
  actions: ActionButton[];
  title?: string;
  className?: string;
}

export function ActionButtons({
  actions,
  title = "AÇÕES",
  className = "",
}: ActionButtonsProps) {
  const getButtonClass = (variant: ActionButton["variant"]) => {
    switch (variant) {
      case "danger":
        return "bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-institutional";
      case "secondary":
        return "btn-secondary";
      default:
        return "btn-primary";
    }
  };

  return (
    <div className={`card p-6 flex flex-col gap-3 h-fit w-48 ${className}`}>
      {title && (
        <h3 className="text-agro-700 font-bold text-center mb-2">{title}</h3>
      )}

      {actions.map((action, index) => (
        <button
          key={index}
          onClick={action.onClick}
          disabled={action.disabled}
          className={`${getButtonClass(
            action.variant
          )} flex items-center justify-center gap-2 w-full ${
            action.disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {action.icon}
          {action.label}
        </button>
      ))}
    </div>
  );
}
