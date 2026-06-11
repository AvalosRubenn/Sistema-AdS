import type { Architect } from "../../types/Architect";
import type { ChartItem } from "../HorizontalBarChart";
import HorizontalBarChart from "../HorizontalBarChart";

interface ArchitectCommiteeStatsProps {
  arquitecto: Architect;
}
function ArchitectCommiteeStats({ arquitecto }: ArchitectCommiteeStatsProps) {
  const CommitteeData: ChartItem[] = [
    {
      label: "Aprobado",
      value: arquitecto.committeeAproved,
      color: "#345995",
    },
    {
      label: "Descartado",
      value: arquitecto.committeeDiscard,
      color: "#345995",
    },
    {
      label: "N/A",
      value: arquitecto.committeeNA,
      color: "#345995",
    },
  ];
  return (
    <div className="w-1/2 bg-background border border-border shadow-sm rounded-2xl">
      <div className="px-6 py-5 flex flex-col gap-2">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">Comité</h2>
        </div>
        <div className="flex items-center flex-col mr-auto">
          <p className="mr-auto">Total</p>
          <p className="text-zies-azul-2 text-4xl font-bold mr-auto">
            {arquitecto.committeeAproved +
              arquitecto.committeeDiscard +
              arquitecto.committeeNA}
          </p>
        </div>
        <HorizontalBarChart
          title="Presentaciones en comité"
          data={CommitteeData}
        />
      </div>
    </div>
  );
}

export default ArchitectCommiteeStats;
