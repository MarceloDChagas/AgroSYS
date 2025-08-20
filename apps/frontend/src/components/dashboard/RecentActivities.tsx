import { FaClipboardList } from "react-icons/fa";
import { useActivityIcon } from "@/hooks/useActivityIcon";
import type { Activity } from "@/specifications/activities/ActivitySpecification";

interface RecentActivity {
  id: string;
  title: string;
  type: string;
  time: string;
}

interface RecentActivitiesProps {
  activities: RecentActivity[];
}

export function RecentActivities({ activities }: RecentActivitiesProps) {
  const { getActivityIcon } = useActivityIcon();

  const activitiesWithSpecifications = activities.map(
    (activity) =>
      ({
        id: activity.id,
        title: activity.title,
        type: activity.type,
        time: activity.time,
      } as Activity)
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-neutral-900">
          Atividades Recentes
        </h3>
        <FaClipboardList className="text-neutral-400" />
      </div>

      <div className="space-y-4">
        {activitiesWithSpecifications.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200"
          >
            <div className="flex-shrink-0 mt-0.5">
              {getActivityIcon(activity)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-neutral-900 font-medium">
                {activity.title}
              </p>
              <p className="text-xs text-neutral-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
