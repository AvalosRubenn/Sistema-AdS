import { Activity, AlertCircle } from "lucide-react";
function ArchitectStress() {
  return (
    <div className="rounded-2xl bg-background shadow-sm border border-border mt-4 h-fit">
      <div className="flex flex-col items-center">
        <div className="my-4 pb-2 flex items-center justify-center border-b-border border-b w-full">
          <p className="text-2xl font-semibold ">Nivel de estrés</p>
        </div>

        <div className="p-8 w-full flex flex-col items-center">
          <div className="bg-warning/12 text-warning p-10 rounded-full gap-2 ">
            <Activity size={80} />
          </div>
          <div className="w-full mt-8">
            <div className="flex items-center justify-between mb-3">
              <p className="text-muted-foreground">Capacidad</p>
              <p>67%</p>
            </div>

            <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-warning rounded-full transition-all"
                style={{ width: `${67}%` }}
              />
            </div>
          </div>

          <div className="w-full border-t border-border mt-8 pt-6">
            <div className="flex items-center gap-4">
              <div className="bg-warning/12 text-warning p-4 rounded-xl">
                <AlertCircle size={24} />
              </div>

              <div>
                <p className="font-medium">Carga Media</p>
                <p className="text-muted-foreground text-sm">
                  3/5 proyectos activos
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
