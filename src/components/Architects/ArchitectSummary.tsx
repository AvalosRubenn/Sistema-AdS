import type { ChartItem } from "../HorizontalBarChart";
import HorizontalBarChart from "../HorizontalBarChart";

const statusData: ChartItem[] = [
  {
    label: "Aprobado",
    value: 28,
    color: "#345995",
  },
  {
    label: "Descartado",
    value: 22,
    color: "#345995",
  },
  {
    label: "En curso",
    value: 22,
    color: "#345995",
  },
  {
    label: "Detenido",
    value: 7,
    color: "#345995",
  },
];

const complexityData: ChartItem[] = [
  {
    label: "Muy alta",
    value: 28,
    color: "#345995",
  },
  {
    label: "Alta",
    value: 22,
    color: "#345995",
  },
  {
    label: "Media",
    value: 22,
    color: "#345995",
  },
  {
    label: "Baja",
    value: 7,
    color: "#345995",
  },
  {
    label: "None",
    value: 7,
    color: "#345995",
  },
];

function ArchitectSummary() {
  return (
    <div className="rounded-2xl bg-background shadow-sm border border-border mt-4 h-fit">
      <div className="px-6 py-5 flex flex-col gap-8">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">Resumen General</h2>
        </div>
        <div className="flex items-center ">
          <div className="flex items-center justify-center flex-col gap-2 mr-auto w-fit">
            <p className="mr-auto">Total de proyectos</p>
            <p className="text-zies-azul-2 text-4xl font-bold mr-auto">57</p>
          </div>
          <div className="flex items-center justify-center  w-full">
            <HorizontalBarChart
              data={statusData}
              title="Solicitudes por estatus"
            />
          </div>
        </div>
        <div className="w-full">
          <HorizontalBarChart
            data={complexityData}
            title="Total de solicitudes por complejidad"
          />
        </div>
      </div>
    </div>
  );
}

export default ArchitectSummary;
