import KanbanCard from "./KanbanCard";
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
      <div className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">Por Hacer</p>
          <p>
            {ToDo.length} {ToDo.length === 1 ? "tarea" : "tareas"}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          {ToDo.map((k) => (
            <KanbanCard
              name={k.name}
              project={k.project}
              priority={k.priority}
              date={k.date}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">En curso</p>
          <p>
            {Doing.length} {Doing.length === 1 ? "tarea" : "tareas"}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          {Doing.map((k) => (
            <KanbanCard
              name={k.name}
              project={k.project}
              priority={k.priority}
              date={k.date}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">Listo para Revisión</p>
          <p>
            {Ready.length} {Ready.length === 1 ? "tarea" : "tareas"}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          {Ready.map((k) => (
            <KanbanCard
              name={k.name}
              project={k.project}
              priority={k.priority}
              date={k.date}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">Terminado</p>
          <p>
            {Done.length} {Done.length === 1 ? "tarea" : "tareas"}
          </p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          {Done.map((k) => (
            <KanbanCard
              name={k.name}
              project={k.project}
              priority={k.priority}
              date={k.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kanban;
