import type { Architect } from "../../types/Architect";

interface ArchitectCommiteeStatsProps {
  arquitecto: Architect;
}
function ArchitectCommiteeStats({ arquitecto }: ArchitectCommiteeStatsProps) {
  return (
    <div className="w-1/2 bg-background border border-border shadow-sm rounded-2xl">
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">Comité</h2>
        </div>
      </div>
    </div>
  );
}

export default ArchitectCommiteeStats;
