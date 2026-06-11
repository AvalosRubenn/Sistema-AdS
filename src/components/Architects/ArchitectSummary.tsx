import type { Architect } from "../../types/Architect";
import HorizontalBarChart from "../HorizontalBarChart";

interface ArchitectSummaryProps {
  arquitecto: Architect;
}

function ArchitectSummary({ arquitecto }: ArchitectSummaryProps) {
  return (
    <div className="rounded-2xl bg-background shadow-sm border border-border mt-4 h-fit">
      <div className="px-6 py-5 flex flex-col gap-8">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">Resumen General</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center justify-center flex-col gap-2 mr-auto w-fit">
            <p className="mr-auto">Total de proyectos</p>
            <p className="text-zies-azul-2 text-4xl font-bold mr-auto">
              {arquitecto.projects}
            </p>
          </div>
          <div className="flex items-center justify-center  w-full">
            <HorizontalBarChart
              data={arquitecto.statusData}
              title="Solicitudes por estatus"
            />
          </div>
        </div>
        <div className="w-full">
          <HorizontalBarChart
            data={arquitecto.statusData}
            title="Total de solicitudes por complejidad"
          />
        </div>
      </div>
    </div>
  );
}

export default ArchitectSummary;
