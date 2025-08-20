import { FaQuestionCircle } from "react-icons/fa";
import { AlertIconWithTooltip } from "./AlertTooltip";

interface AlertStatsProps {
  urgentCount: number;
  warningCount: number;
  infoCount: number;
  totalCount: number;
  onShowHelp?: () => void;
}

export function AlertStats({
  urgentCount,
  warningCount,
  infoCount,
  totalCount,
  onShowHelp,
}: AlertStatsProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-neutral-900">
          Resumo de Alertas
        </h3>
        <div className="flex items-center gap-2">
          <div className="text-sm text-neutral-500">Total: {totalCount}</div>
          {onShowHelp && (
            <button
              onClick={onShowHelp}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              title="Ajuda sobre alertas"
            >
              <FaQuestionCircle size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertIconWithTooltip priority="urgent" />
          </div>
          <div className="text-2xl font-bold text-red-600">{urgentCount}</div>
          <div className="text-xs text-neutral-500">Urgentes</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertIconWithTooltip priority="warning" />
          </div>
          <div className="text-2xl font-bold text-yellow-600">
            {warningCount}
          </div>
          <div className="text-xs text-neutral-500">Atenção</div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center mb-2">
            <AlertIconWithTooltip priority="info" />
          </div>
          <div className="text-2xl font-bold text-blue-600">{infoCount}</div>
          <div className="text-xs text-neutral-500">Informativos</div>
        </div>
      </div>

      {totalCount === 0 && (
        <div className="text-center py-4">
          <div className="text-neutral-400 text-sm">Nenhum alerta ativo</div>
        </div>
      )}
    </div>
  );
}
