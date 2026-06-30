import { FileText } from "lucide-react";

function ProjectTask() {
  return (
    <div className="flex flex-col px-6 ">
      <div className="flex my-4 gap-3 items-center">
        <div>
          <p className="text-lg font-semibold px-3 py-2 text-background bg-zies-azul-2 rounded-lg">
            R1
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">Detalle de Proyectos</p>
          <p className="text-sm text-muted-foreground">
            Fecha limite: 30 jun, 2026
          </p>
        </div>
        <span className="rounded-md bg-success px-2 py-1 text-sm font-semibold text-white ml-auto">
          Aceptada
        </span>
      </div>
      <div className="flex flex-col my-4 gap-3 justify-center bg-muted rounded-xl pl-4 p-3 w-full">
        <div className="flex gap-2 items-center">
          <FileText size={20} className="text-zies-azul-2" />
          <p className="text-sm">Link subido</p>
        </div>
        <p className="text-sm text-zies-azul-2">
          https://sharepoint.com/link-de-ejemplo
        </p>
      </div>
    </div>
  );
}

export default ProjectTask;
