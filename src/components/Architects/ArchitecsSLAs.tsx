import type { Architect } from "../../types/Architect";

interface ArchitecsSLAsProps {
  arquitecto: Architect;
}
function ArchitectSLAs({ arquitecto }: ArchitecsSLAsProps) {
  return (
    <div className="w-1/2 bg-background border border-border shadow-sm rounded-2xl">
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">SLA's</h2>
        </div>
        <div className="w-full rounded-xl bg-success/12 items-center justify-center flex flex-col gap-1">
          <p className="text-sm mr-auto ml-6 mt-4">Proyectos Cerrados</p>
          <p className="text-4xl font-bold text-success mr-auto ml-6">
            {arquitecto.projectsClosed}
          </p>
        </div>
        <div className="w-full rounded-xl bg-warning/12 items-center justify-center flex flex-col gap-1">
          <p className="text-sm mr-auto ml-6 mt-4">Proyectos Activos</p>
          <p className="text-4xl font-bold text-warning mr-auto ml-6">
            {arquitecto.projectsActive}
          </p>
        </div>
        <div className="w-full rounded-xl bg-error/12 items-center justify-center flex flex-col gap-1">
          <p className="text-sm mr-auto ml-6 mt-4">Proyectos Cancelados</p>
          <p className="text-4xl font-bold text-error mr-auto ml-6">
            {arquitecto.projectsCanceled}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArchitectSLAs;
