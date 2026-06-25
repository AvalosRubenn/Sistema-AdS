import { useRef, useState, useEffect } from "react";
import invariant from "tiny-invariant";
import type { KanbanCardProps } from "./KanbanCard";
import KanbanCard from "./KanbanCard";
import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

interface KanbanBoardProps {
  Tasks: KanbanCardProps[];
  Title: string;
  columnId: string;
  onEnterCard?: () => void;
}

function KanbanBoard({ Tasks, Title, columnId }: KanbanBoardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    invariant(el);
    return dropTargetForElements({
      element: el,
      getData: () => ({ columnId }),
      onDragEnter: () => setIsDraggedOver(true),
      onDragLeave: () => setIsDraggedOver(false),
      onDrop: () => setIsDraggedOver(false),
    });
  }, [columnId]);

  return (
    <div
      ref={ref}
      className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col"
    >
      <div className="border-b border-border pl-4 ">
        <p className="font-bold text-xl">{Title}</p>
        <p>
          {Tasks.length} {Tasks.length === 1 ? "tarea" : "tareas"}
        </p>
      </div>
      <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
        {Tasks.map((t) => (
          <KanbanCard
            key={t.id}
            id={t.id}
            columnId={columnId}
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
