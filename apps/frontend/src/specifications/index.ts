// Exportações das especificações base
export type { Specification } from "./base/Specification";
export { AbstractSpecification } from "./base/AbstractSpecification";

// Exportações das especificações de atividades
export type { Activity } from "./activities/ActivitySpecification";
export {
  ActivityTypeSpecification,
  ActivityPrioritySpecification,
  ActivityStatusSpecification,
  HighPriorityPendingSpecification,
  RecentActivitySpecification,
} from "./activities/ActivitySpecification";
export { ActivitySpecificationFactory } from "./activities/ActivitySpecificationFactory";
