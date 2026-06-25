import KanbanBoard from "./KanbanBoard";
import type { KanbanCardProps } from "./KanbanCard";
import { useState, useEffect } from "react";
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import KanbanTaskModal from "./KanbanTaskModal";

interface KanbanProps {
  InitialToDo: KanbanCardProps[];
  InitialDoing: KanbanCardProps[];
  InitialReady: KanbanCardProps[];
  InitialDone: KanbanCardProps[];
}

interface BoardState {
  ToDo: KanbanCardProps[];
  Doing: KanbanCardProps[];
  Ready: KanbanCardProps[];
  Done: KanbanCardProps[];
}

function Kanban({
  InitialToDo,
  InitialDoing,
  InitialReady,
  InitialDone,
}: KanbanProps) {
  const [board, setBoard] = useState<BoardState>({
    ToDo: InitialToDo,
    Doing: InitialDoing,
    Ready: InitialReady,
    Done: InitialDone,
  });

  const [activeTask, setActiveTask] = useState<KanbanCardProps | null>(null);

  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) return;

        const cardId = source.data.cardId as string;
        const sourceColumn = source.data.columnId as keyof BoardState;
        const targetColumn = destination.data.columnId as keyof BoardState;

        if (sourceColumn === targetColumn) return;

        setBoard((prev) => {
          const sourceList = [...prev[sourceColumn]];
          const cardIndex = sourceList.findIndex((card) => card.id === cardId);
          if (cardIndex === -1) return prev;

          const [movedCard] = sourceList.splice(cardIndex, 1);

          const targetList = [...prev[targetColumn]];
          targetList.push(movedCard);

          if (targetColumn === "Ready") {
            setTimeout(() => setActiveTask(movedCard), 50);
          }

          return {
            ...prev,
            [sourceColumn]: sourceList,
            [targetColumn]: targetList,
          };
        });
      },
    });
  }, []);

  function handleSaveLink(cardId: string, sharepointLink: string) {
    console.log(`Guardando Link "${sharepointLink}" en la tarjeta ${cardId}`);

    setBoard((prev) => {
      const updatedReady = prev.Ready.map((card) =>
        card.id === cardId ? { ...card, sharepointLink } : card,
      );
      return { ...prev, Ready: updatedReady };
    });
  }

  return (
    <div className="flex gap-6 w-full p-6 ">
      <KanbanBoard columnId="ToDo" Title="Por Hacer" Tasks={board.ToDo} />
      <KanbanBoard columnId="Doing" Title="En curso" Tasks={board.Doing} />
      <KanbanBoard
        columnId="Ready"
        Title="Listo para Revisión"
        Tasks={board.Ready}
      />
      <KanbanBoard columnId="Done" Title="Terminado" Tasks={board.Done} />
      {activeTask && (
        <KanbanTaskModal
          tarea={activeTask}
          onClose={() => setActiveTask(null)}
          onSaveLink={handleSaveLink}
        />
      )}
    </div>
  );
}

export default Kanban;
