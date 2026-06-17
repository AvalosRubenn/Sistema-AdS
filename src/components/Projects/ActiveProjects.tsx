import type { ActiveProjectProps } from "../ActiveProject";
import ActiveProject from "../ActiveProject";

interface ActiveProjectsProps {
  proyectos: ActiveProjectProps[];
}

function ActiveProjects({ proyectos }: ActiveProjectsProps) {
  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-2xl font-semibold text-zies-azul-1">
          Proyectos Activos
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          6 proyectos en curso
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 p-5">
        {proyectos.map((p) => (
          <ActiveProject
            nombreDelProyecto={p.nombreDelProyecto}
            celula={p.celula}
            porcentaje={p.porcentaje}
            fecha={p.fecha}
            prioridad={p.prioridad}
          />
        ))}
      </div>
    </div>
  );
}

export default ActiveProjects;
