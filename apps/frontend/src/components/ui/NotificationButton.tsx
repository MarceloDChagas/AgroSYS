import { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";

export function NotificationButton() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 text-agro-600 hover:text-agro-700 transition-colors group bg-agro-50 rounded-lg border border-agro-200"
      >
        <FaBell size={18} />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-neutral-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Notificações
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white border border-agro-200 rounded-lg shadow-lg z-50">
          <div className="p-4 text-sm text-agro-700">
            <p className="text-center text-agro-400">
              Nenhuma notificação no momento.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
