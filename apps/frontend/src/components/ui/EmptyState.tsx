import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface EmptyStateStep {
  id: string;
  title: string;
  description: string;
  route: string;
  completed: boolean;
}

interface EmptyStateProps {
  title: string;
  description: string;
  steps: EmptyStateStep[];
  icon?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  steps,
  icon,
  className = "",
}: EmptyStateProps) {
  const navigate = useNavigate();

  const completedSteps = steps.filter((step) => step.completed).length;
  const progressPercentage = (completedSteps / steps.length) * 100;

  return (
    <div
      className={`
        bg-white rounded-xl p-8 shadow-sm border border-neutral-100
        text-center
        ${className}
      `}
    >
      {/* Ícone */}
      {icon && <div className="text-6xl mb-4 text-neutral-300">{icon}</div>}

      {/* Título e Descrição */}
      <h2 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h2>
      <p className="text-neutral-600 mb-8 max-w-md mx-auto">{description}</p>

      {/* Barra de Progresso */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-neutral-700">
            Progresso
          </span>
          <span className="text-sm text-neutral-500">
            {completedSteps} de {steps.length} concluídos
          </span>
        </div>
        <div className="w-full bg-neutral-200 rounded-full h-2">
          <div
            className="bg-agro-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Lista de Passos */}
      <div className="space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`
              flex items-center p-4 rounded-lg border transition-all duration-200
              ${
                step.completed
                  ? "bg-green-50 border-green-200"
                  : "bg-neutral-50 border-neutral-200 hover:bg-neutral-100"
              }
            `}
          >
            {/* Ícone de Status */}
            <div className="mr-4">
              {step.completed ? (
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              ) : (
                <div className="w-6 h-6 bg-neutral-300 rounded-full flex items-center justify-center">
                  <span className="text-neutral-600 text-xs">
                    {steps.indexOf(step) + 1}
                  </span>
                </div>
              )}
            </div>

            {/* Conteúdo do Passo */}
            <div className="flex-1 text-left">
              <h3
                className={`font-medium ${
                  step.completed ? "text-green-700" : "text-neutral-900"
                }`}
              >
                {step.title}
              </h3>
              <p
                className={`text-sm ${
                  step.completed ? "text-green-600" : "text-neutral-600"
                }`}
              >
                {step.description}
              </p>
            </div>

            {/* Botão de Ação */}
            {!step.completed && (
              <button
                onClick={() => navigate(step.route)}
                className="
                  px-4 py-2 text-sm font-medium
                  bg-agro-500 text-white rounded-lg
                  hover:bg-agro-600 transition-colors duration-200
                  focus:outline-none focus:ring-2 focus:ring-agro-500 focus:ring-offset-2
                "
              >
                Ir para
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Mensagem de Motivação */}
      {completedSteps === steps.length ? (
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <p className="text-green-700 font-medium">
            🎉 Parabéns! Você configurou seu sistema AgroSys com sucesso!
          </p>
          <p className="text-green-600 text-sm mt-1">
            Agora você pode começar a usar todas as funcionalidades do sistema.
          </p>
        </div>
      ) : (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-blue-700 font-medium">
            💡 Dica: Complete os passos acima para aproveitar ao máximo o
            AgroSys
          </p>
          <p className="text-blue-600 text-sm mt-1">
            Cada passo te ajudará a configurar uma parte importante do sistema.
          </p>
        </div>
      )}
    </div>
  );
}
