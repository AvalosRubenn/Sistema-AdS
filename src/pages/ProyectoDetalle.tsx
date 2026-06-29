import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import type { ProjectCardProps } from "../components/Projects/ProjectCard";

const priorityStyles = {
  ALTA: { bg: "bg-error" },
  MEDIA: { bg: "bg-warning" },
  BAJA: { bg: "bg-success" },
};

function ProyectoDetalle() {
  const { code } = useParams();
  const location = useLocation();
  const project = location.state?.project as ProjectCardProps | undefined;

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-muted p-8 flex flex-col">
        <Link
          className="flex gap-2 text-zies-azul-2 items-center p-2 rounded-lg hover:bg-foreground/8 w-fit h-fit mr-auto"
          to="/proyectos"
        >
          <ArrowLeft size={20} />
          <p>Volver</p>
        </Link>
        <div className="flex-1 w-full flex flex-col items-center justify-center text-4xl">
          <div className="bg-background p-6 rounded-xl border border-border shadow-sm max-w-md text-center">
            <p className="font-semibold">Proyecto ZIES-{code} no encontrado</p>
            <p className="text-xl mt-1">
              El proyecto no existe o estás intentando acceder directamente sin
              pasar por la lista.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (project) {
    const styles = priorityStyles[project.priority];

    return (
      <div className="min-h-screen w-full bg-muted p-8">
        <Link
          className="flex gap-2 text-zies-azul-2 items-center p-2 rounded-lg hover:bg-foreground/8 w-fit mr-auto"
          to="/proyectos"
        >
          <ArrowLeft size={20} />
          <p>Volver</p>
        </Link>
        <div className="mt-2 flex gap-8 items-center">
          <h1 className="text-4xl font-bold">{project.Title}</h1>
          <p
            className={`text-white ${styles.bg} px-2 py-1 rounded-lg text-sm font-semibold mr-auto`}
          >
            {project.priority}
          </p>
        </div>
        <p className="text-zies-azul-2 text-lg mt-4 ">ZIES-{project.Code}</p>
      </div>
    );
  }
}

export default ProyectoDetalle;
