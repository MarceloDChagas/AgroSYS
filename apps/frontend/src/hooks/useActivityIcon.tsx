import { useMemo } from "react";
import {
  FaSeedling,
  FaTint,
  FaWrench,
  FaBox,
  FaClipboardList,
} from "react-icons/fa";
import { ActivitySpecificationFactory } from "@/specifications/activities/ActivitySpecificationFactory";
import type { Activity } from "@/specifications/activities/ActivitySpecification";

// Hook customizado que usa o padrão Specification para determinar o ícone da atividade
export const useActivityIcon = () => {
  // Memoizar as especificações para evitar recriação a cada render
  const specifications = useMemo(
    () => ({
      harvest: ActivitySpecificationFactory.harvest(),
      fertilizer: ActivitySpecificationFactory.fertilizer(),
      maintenance: ActivitySpecificationFactory.maintenance(),
      inventory: ActivitySpecificationFactory.inventory(),
    }),
    []
  );

  // Função que retorna o ícone baseado na especificação
  const getActivityIcon = (activity: Activity) => {
    // Usar especificações para determinar o tipo de atividade
    if (specifications.harvest.isSatisfiedBy(activity)) {
      return <FaSeedling className="text-green-600" />;
    }

    if (specifications.fertilizer.isSatisfiedBy(activity)) {
      return <FaTint className="text-blue-600" />;
    }

    if (specifications.maintenance.isSatisfiedBy(activity)) {
      return <FaWrench className="text-orange-600" />;
    }

    if (specifications.inventory.isSatisfiedBy(activity)) {
      return <FaBox className="text-purple-600" />;
    }

    // Ícone padrão para atividades não reconhecidas
    return <FaClipboardList className="text-neutral-600" />;
  };

  return { getActivityIcon, specifications };
};
