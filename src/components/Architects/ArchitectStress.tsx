import { Activity, AlertCircle } from "lucide-react";
import type { Architect } from "../../types/Architect";
interface ArchitectStressProps {
  arquitecto: Architect;
}
function ArchitectStress({ arquitecto }: ArchitectStressProps) {
  return (
    <div className="rounded-2xl bg-background shadow-sm border border-border mt-4 h-fit">
      <div className="flex flex-col items-center">
        <div className="my-4 pb-2 flex items-center justify-center border-b-border border-b w-full">
          <p className="text-2xl font-semibold ">Nivel de estrés</p>
        </div>

        <div className="p-8 w-full flex flex-col items-center">
          <div
            className={`p-10 rounded-full gap-2 ${
              arquitecto.projectsActive / 0.25 < 50
                ? "bg-success/12 text-success"
                : arquitecto.projectsActive / 0.25 < 81
                  ? "bg-warning/12 text-warning"
                  : "bg-error/12 text-error"
            }`}
          >
            <Activity size={80} />
          </div>

          <div className="w-full mt-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-muted-foreground">Capacidad</p>
              <p>{arquitecto.projectsActive / 0.25}%</p>
            </div>

            <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  arquitecto.projectsActive / 0.25 < 50
                    ? "bg-success"
                    : arquitecto.projectsActive / 0.25 < 81
                      ? "bg-warning"
                      : "bg-error"
                }`}
                style={{ width: `${arquitecto.projectsActive / 0.25}%` }}
              />
            </div>
          </div>

          <div className="w-full border-t border-border mt-8 pt-6">
            <div className="flex items-center gap-4">
              <div
                className={`p-4 rounded-xl ${
                  arquitecto.projectsActive / 0.25 < 50
                    ? "bg-success/12 text-success"
                    : arquitecto.projectsActive / 0.25 < 81
                      ? "bg-warning/12 text-warning"
                      : "bg-error/12 text-error"
                }`}
              >
                <AlertCircle size={24} />
              </div>

              <div>
                <p className="font-medium">Carga Media</p>
                <p className="text-muted-foreground text-sm">
                  {arquitecto.projectsActive}/25 proyectos activos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ArchitectStress;
