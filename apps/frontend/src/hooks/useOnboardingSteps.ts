import { useDashboard } from "./useDashboard";

export interface OnboardingStep {
  id: string;
  title: string;
  description: string;
  route: string;
  completed: boolean;
}

export function useOnboardingSteps() {
  const { statistics } = useDashboard();

  const setupSteps: OnboardingStep[] = [
    {
      id: "1",
      title: "Cadastre sua primeira Unidade de Produção",
      description: "Configure suas áreas de plantio e produção",
      route: "/uap/cadastro",
      completed: statistics.uaps > 0,
    },
    {
      id: "2",
      title: "Adicione seus Insumos ao Estoque",
      description: "Registre fertilizantes, defensivos e outros insumos",
      route: "/insumos/cadastro",
      completed: statistics.inputMaterials > 0,
    },
    {
      id: "3",
      title: "Agende sua primeira atividade",
      description: "Programe colheitas, aplicações e manutenções",
      route: "/colheita/nova",
      completed: statistics.harvests > 0,
    },
    {
      id: "4",
      title: "Configure suas ferramentas",
      description: "Registre tratores, implementos e equipamentos",
      route: "/ferramentas",
      completed: statistics.tools > 0,
    },
  ];

  const allStepsCompleted = setupSteps.every((step) => step.completed);

  return {
    setupSteps,
    allStepsCompleted,
  };
}
