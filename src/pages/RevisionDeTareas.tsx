import { Search } from "lucide-react";

interface Tarea {
  titulo: string;
  proyecto: string;
  arquitecto: string;
  fecha: string;
  version: string;
  entrega: string;
  sharepoint: string;
  comentariosArquitecto: string;
}

function RevisionDeTareas() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zies-azul-1">
          Revisión de tareas
        </h1>
      </div>

      <div className="relative mb-6">
        <Search
          size={18}
          className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-muted-foreground
          "
        />

        <input
          type="text"
          placeholder="Buscar por nombre de proyecto, arquitecto o tarea..."
          className="
            h-11 w-full rounded-xl
            border border-border
            bg-background
            pl-11 pr-4
            text-sm
            outline-none
          "
        />
      </div>
    </div>
  );
}

export default RevisionDeTareas;
