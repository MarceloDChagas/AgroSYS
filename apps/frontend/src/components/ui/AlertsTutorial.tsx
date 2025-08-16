import { useState } from "react";
import {
  FaExclamationTriangle,
  FaExclamationCircle,
  FaInfoCircle,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

interface AlertsTutorialProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export function AlertsTutorial({
  isVisible,
  onClose,
  onComplete,
}: AlertsTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Bem-vindo ao Sistema de Alertas!",
      description:
        "Vamos te ajudar a entender como funcionam os alertas do AgroSys.",
      icon: <FaExclamationTriangle className="text-blue-500" size={24} />,
    },
    {
      title: "Alertas Urgentes",
      description:
        "🔴 Ícone vermelho: Requer ação imediata. Exemplo: Estoque crítico ou colheita em 2 dias.",
      icon: <FaExclamationTriangle className="text-red-500" size={24} />,
      example: "Estoque de fertilizante está acabando!",
    },
    {
      title: "Alertas de Atenção",
      description:
        "🟡 Ícone amarelo: Precisa de atenção em breve. Exemplo: Manutenção pendente ou estoque baixo.",
      icon: <FaExclamationCircle className="text-yellow-500" size={24} />,
      example: "Ferramenta precisa de manutenção",
    },
    {
      title: "Alertas Informativos",
      description:
        "🔵 Ícone azul: Apenas para informação. Exemplo: Colheita programada ou relatório disponível.",
      icon: <FaInfoCircle className="text-blue-500" size={24} />,
      example: "Colheita programada para próxima semana",
    },
    {
      title: "Como Interagir",
      description:
        "Clique em qualquer alerta para ver detalhes e marcar como lido. O sistema atualiza automaticamente.",
      icon: <FaCheck className="text-green-500" size={24} />,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Tutorial de Alertas
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">{currentStepData.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            {currentStepData.title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {currentStepData.description}
          </p>
          {currentStepData.example && (
            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm text-gray-700 font-medium">
                Exemplo: {currentStepData.example}
              </p>
            </div>
          )}
        </div>

        {/* Progress */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index <= currentStep ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {currentStep === steps.length - 1 ? "Concluir" : "Próximo"}
          </button>
        </div>

        {/* Skip option */}
        <div className="text-center mt-4">
          <button
            onClick={onComplete}
            className="text-sm text-gray-500 hover:text-gray-700 underline"
          >
            Pular tutorial
          </button>
        </div>
      </div>
    </div>
  );
}
