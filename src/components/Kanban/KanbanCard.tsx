type Priority = "ALTA" | "MEDIA" | "BAJA";
interface KanbanCardProps {
  name: string;
  project: string;
  priority: Priority;
  date: string;
}

const priorityStyles = {
  ALTA: { bg: "bg-error" },
  MEDIA: { bg: "bg-warning" },
  BAJA: { bg: "bg-success" },
};
function KanbanCard({ name, project, priority, date }: KanbanCardProps) {
  const styles = priorityStyles[priority];
  return (
    <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
      <div className="flex items-center">
        <p className="font-bold mr-auto">{name}</p>
        <div className={`rounded-full ${styles.bg} w-3 h-3`} />
      </div>
      <p className="text-sm">{project}</p>
      <div className="flex items-center">
        <p
          className={`text-white ${styles.bg} px-2 py-1 rounded-md text-xs font-semibold`}
        >
          {priority}
        </p>
        <p className="text-sm ml-auto">{date}</p>
      </div>
    </div>
  );
}

export default KanbanCard;
