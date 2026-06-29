import { FolderKanban } from "lucide-react";

type Priority = "ALTA" | "MEDIA" | "BAJA";

export interface ProjectCardProps {
  Title: string;
  Code: number;
  Celula: string;
  ProgressPercentage: number;
  priority: Priority;
  ArchitectName: string;
  Deadline: string;
}

const priorityStyles = {
  ALTA: { bg: "bg-error" },
  MEDIA: { bg: "bg-warning" },
  BAJA: { bg: "bg-success" },
};

function ProjectCard({
  Title,
  Code,
  Celula,
  ProgressPercentage,
  priority,
  ArchitectName,
  Deadline,
}: ProjectCardProps) {
  /*Este componente fue diseñado para la págiina de Proyectos */
  const styles = priorityStyles[priority];
  return (
    <div className="w-full bg-background border border-border p-2 rounded-xl shadow-sm flex flex-col gap-3">
      <div className="flex items-center px-3 pt-3">
        <div className="bg-zies-azul-2/12 p-2 rounded-lg">
          <FolderKanban size={25} className="text-zies-azul-2" />
        </div>
        <p
          className={`text-white ${styles.bg} px-2 py-1 rounded-md text-xs font-semibold ml-auto mb-auto`}
        >
          {priority}
        </p>
      </div>
      <div className="flex flex-col px-3">
        <p className="font-bold text-2xl">{Title}</p>
        <p className="text-muted-foreground">
          ZIES-{Code} • {Celula}
        </p>
      </div>
      <div className="flex flex-col px-3 gap-2 pb-3">
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Progreso</span>
          <span className="text-muted-foreground">{ProgressPercentage}%</span>
        </div>
        <div className="h-2 rounded-full bg-muted">
          <div
            style={{ width: `${ProgressPercentage}%` }}
            className="h-2 rounded-full bg-success"
          />
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Arquitecto(a)</span>
          <span className="text-zies-azul-1">{ArchitectName}</span>
        </div>
        <div className="flex items-center">
          <span className="text-muted-foreground mr-auto">Fecha limite</span>
          <span className="text-zies-azul-1">{Deadline}</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
