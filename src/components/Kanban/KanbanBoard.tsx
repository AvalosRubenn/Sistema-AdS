import type { KanbanCardProps } from "./KanbanCard";
import KanbanCard from "./KanbanCard";

interface KanbanBoardProps {
  Tasks: KanbanCardProps[];
  Title: string;
}

function KanbanBoard({ Tasks, Title }: KanbanBoardProps) {
  return (
    <div className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
      <div className="border-b border-border pl-4 ">
        <p className="font-bold text-xl">{Title}</p>
        <p>
          {Tasks.length} {Tasks.length === 1 ? "tarea" : "tareas"}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
        {Tasks.map((t) => (
          <KanbanCard
            name={t.name}
            project={t.project}
            priority={t.priority}
            date={t.date}
          />
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
