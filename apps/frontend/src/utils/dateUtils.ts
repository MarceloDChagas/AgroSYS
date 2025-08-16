export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInHours = Math.floor(
    (now.getTime() - new Date(date).getTime()) / (1000 * 60 * 60)
  );

  if (diffInHours < 1) return "Agora mesmo";
  if (diffInHours < 24) return `${diffInHours}h atrás`;
  if (diffInHours < 48) return "Ontem";
  return `${Math.floor(diffInHours / 24)} dias atrás`;
}
