import type { Specification } from "../base/Specification";
import {
  ActivityTypeSpecification,
  ActivityPrioritySpecification,
  HighPriorityPendingSpecification,
  RecentActivitySpecification,
} from "./ActivitySpecification";
import type { Activity } from "./ActivitySpecification";

// Factory para criar especificações comuns
export class ActivitySpecificationFactory {
  static harvest(): ActivityTypeSpecification {
    return new ActivityTypeSpecification("harvest");
  }

  static fertilizer(): ActivityTypeSpecification {
    return new ActivityTypeSpecification("fertilizer");
  }

  static maintenance(): ActivityTypeSpecification {
    return new ActivityTypeSpecification("maintenance");
  }

  static inventory(): ActivityTypeSpecification {
    return new ActivityTypeSpecification("inventory");
  }

  static highPriority(): ActivityPrioritySpecification {
    return new ActivityPrioritySpecification("high");
  }

  static mediumPriority(): ActivityPrioritySpecification {
    return new ActivityPrioritySpecification("medium");
  }

  static lowPriority(): ActivityPrioritySpecification {
    return new ActivityPrioritySpecification("low");
  }

  static urgent(): Specification<Activity> {
    return new HighPriorityPendingSpecification();
  }

  static recent(hours: number = 24): RecentActivitySpecification {
    return new RecentActivitySpecification(hours);
  }

  // Especificações compostas
  static urgentHarvest(): Specification<Activity> {
    return this.harvest().and(this.highPriority());
  }

  static maintenanceOrInventory(): Specification<Activity> {
    return this.maintenance().or(this.inventory());
  }

  static notLowPriority(): Specification<Activity> {
    return this.lowPriority().not();
  }
}
