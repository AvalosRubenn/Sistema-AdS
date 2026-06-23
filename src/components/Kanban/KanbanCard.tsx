import { useEffect, useRef, useState } from "react";
import invariant from "tiny-invariant";
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

type Priority = "ALTA" | "MEDIA" | "BAJA";
export interface KanbanCardProps {
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
  const ref = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  useEffect(() => {
    const el = ref.current;
    invariant(el);

    return draggable({
      element: el,
      onGenerateDragPreview: () => {
        setDragging(true);
        console.log("start");
      },
      onDrop: () => setDragging(false),
    });
  }, []);
  const styles = priorityStyles[priority];
  return (
    <div
      className={`bg-background ${dragging ? "opacity-50 " : "bg-background"} border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4`}
      ref={ref}
    >
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
