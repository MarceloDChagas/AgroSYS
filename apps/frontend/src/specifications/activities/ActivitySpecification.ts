import { AbstractSpecification } from "../base/AbstractSpecification";

// Interface para atividades
export interface Activity {
  id: string;
  title: string;
  type: string;
  time: string;
  priority?: "low" | "medium" | "high";
  location?: string;
  status?: "pending" | "completed" | "cancelled";
}

// Especificações específicas para atividades
export class ActivityTypeSpecification extends AbstractSpecification<Activity> {
  constructor(private activityType: string) {
    super();
  }

  isSatisfiedBy(activity: Activity): boolean {
    return activity.type === this.activityType;
  }
}

export class ActivityPrioritySpecification extends AbstractSpecification<Activity> {
  constructor(private priority: "low" | "medium" | "high") {
    super();
  }

  isSatisfiedBy(activity: Activity): boolean {
    return activity.priority === this.priority;
  }
}

export class ActivityStatusSpecification extends AbstractSpecification<Activity> {
  constructor(private status: "pending" | "completed" | "cancelled") {
    super();
  }

  isSatisfiedBy(activity: Activity): boolean {
    return activity.status === this.status;
  }
}

export class HighPriorityPendingSpecification extends AbstractSpecification<Activity> {
  isSatisfiedBy(activity: Activity): boolean {
    return activity.priority === "high" && activity.status === "pending";
  }
}

export class RecentActivitySpecification extends AbstractSpecification<Activity> {
  constructor(private _hoursThreshold: number = 24) {
    super();
  }

  isSatisfiedBy(activity: Activity): boolean {
    // Verifica se a atividade ocorreu dentro do limite de horas definido
    const activityTime = new Date(activity.time).getTime();
    const now = Date.now();
    const hoursDiff = (now - activityTime) / (1000 * 60 * 60);
    return hoursDiff <= this._hoursThreshold;
  }
}
