import KanbanBoard from "./KanbanBoard";
import type { KanbanCardProps } from "./KanbanCard";

interface KanbanProps {
  ToDo: KanbanCardProps[];
  Doing: KanbanCardProps[];
  Ready: KanbanCardProps[];
  Done: KanbanCardProps[];
}

function Kanban({ ToDo, Doing, Ready, Done }: KanbanProps) {
  return (
    <div className="flex gap-6 w-full p-6 ">
      <KanbanBoard Tasks={ToDo} Title="Por Hacer" />
      <KanbanBoard Tasks={Doing} Title="En curso" />
      <KanbanBoard Tasks={Ready} Title="Listo para Revisión" />
      <KanbanBoard Tasks={Done} Title="Terminado" />
    </div>
  );
}

export default Kanban;
