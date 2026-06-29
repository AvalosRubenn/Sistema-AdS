import { FolderKanban } from "lucide-react";

function ProjectCard() {
  /*Este componente fue diseñado para la págiina de Proyectos */
  return (
    <div className="w-full bg-background border border-border p-2 rounded-xl shadow-sm flex flex-col gap-3">
      <div className="flex items-center px-3 pt-3">
        <div className="bg-zies-azul-2/12 p-2 rounded-lg">
          <FolderKanban size={25} className="text-zies-azul-2" />
        </div>
        <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold ml-auto mb-auto">
          ALTA
        </p>
      </div>
      <div className="flex flex-col px-3">
        <p className="font-bold text-2xl">Titulo del proyecto</p>
        <p className="text-muted-foreground">ZIES-1234 • Célula</p>
      </div>
      <div className="flex flex-col px-3 gap-2 pb-3">
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Progreso</span>
          <span className="text-muted-foreground">67%</span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div className="h-2 rounded-full bg-success w-[67%]" />
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Arquitecto(a)</span>
          <span className="text-zies-azul-1">Nombre Apellido</span>
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Fecha limite</span>
          <span className="text-zies-azul-1">DD/MM</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
