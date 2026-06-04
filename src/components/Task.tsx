import { Clock3, FolderKanban, User } from "lucide-react";

export interface Tarea {
  titulo: string;
  proyecto: string;
  arquitecto: string;
  fecha: string;
  version: string;
  entrega: string;
  sharepoint: string;
  comentariosArquitecto: string;
}

interface TaskProps {
  tarea: Tarea;
  onClick: () => void;
}

function Task({ tarea, onClick }: TaskProps) {
  return (
    <div
      onClick={onClick}
      className="
        flex cursor-pointer items-center justify-between
        px-6 py-5
        transition-colors
        hover:bg-muted/30
      "
    >
      <div>
        <h3 className="text-lg font-semibold text-zies-azul-1">
          {tarea.titulo}
        </h3>

        <div className="mt-3 flex items-center gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <FolderKanban size={14} />
            <span>{tarea.proyecto}</span>
          </div>

          <div className="flex items-center gap-2">
            <User size={14} />
            <span>{tarea.arquitecto}</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={14} />
            <span>{tarea.fecha}</span>
          </div>
        </div>
      </div>

      <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
        {tarea.version}
      </div>
    </div>
  );
}

export default Task;
