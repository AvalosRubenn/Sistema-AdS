import KanbanCard from "./KanbanCard";

function Kanban() {
  return (
    <div className="flex gap-6 w-full p-6 ">
      <div className="w-[25%] h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">Por Hacer</p>
          <p>3 tareas</p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          <KanbanCard
            name="R1 - Investigación Inicial"
            project="Migración AWS"
            priority="BAJA"
            date="20 jun"
          />
        </div>
      </div>
    </div>
  );
}

export default Kanban;
