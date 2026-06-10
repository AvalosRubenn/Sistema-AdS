import type { Architect } from "../../types/Architect";
interface ArchitectRoleProps {
  arquitecto: Architect;
}
function ArchitectRole({ arquitecto }: ArchitectRoleProps) {
  return (
    <div className="w-2xs h-fit bg-background rounded-xl p-8 mt-4 shadow-sm flex flex-col gap-2 items-center justify-center">
      <h2 className="text-2xl font-semibold mr-auto">Rol y Fortalezas</h2>
      <p className="mr-auto">{arquitecto.position}</p>
      <p className="text-justify">{arquitecto.positionDescription}</p>
      <div
        className={`w-full rounded-2xl ${arquitecto.performancePercentage < 50 ? "bg-error/12" : arquitecto.performancePercentage < 75 ? "bg-warning/12" : "bg-success/12"}  px-4 py-2  flex flex-col `}
      >
        <p className="text-xs text-muted-foreground">
          % de finalización a tiempo
        </p>
        <h3
          className={`text-3xl ${arquitecto.performancePercentage < 50 ? "text-error" : arquitecto.performancePercentage < 75 ? "text-warning" : "text-success"}  p-4 flex flex-col gap-2 mr-auto`}
        >
          {arquitecto.performancePercentage}%
        </h3>
      </div>
    </div>
  );
}

export default ArchitectRole;
