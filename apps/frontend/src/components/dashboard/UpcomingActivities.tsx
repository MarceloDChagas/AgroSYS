import { FaCalendarAlt } from "react-icons/fa";
import type { UpcomingActivity } from "@/hooks/useDashboardData";

interface UpcomingActivitiesProps {
  activities: UpcomingActivity[];
}

export function UpcomingActivities({ activities }: UpcomingActivitiesProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">
          Próximas Atividades
        </h3>
        <FaCalendarAlt className="text-neutral-400" />
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-all duration-200 cursor-pointer group"
          >
            <div className="mr-4">
              <div className="w-3 h-3 bg-agro-500 rounded-full group-hover:scale-110 transition-transform duration-200"></div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-neutral-900 group-hover:text-agro-700 transition-colors duration-200">
                {activity.title}
              </h4>
              <p className="text-sm text-neutral-600">
                {activity.location} • {activity.date}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium text-neutral-500">
                {activity.daysLeft === 0 ? "Hoje" : `${activity.daysLeft} dias`}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
