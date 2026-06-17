import { Clock, FileText, CircleCheckBig, Calendar } from "lucide-react";
function ArchitectOverview() {
  return (
    <div className="rounded-2xl bg-background shadow-sm border border-border mt-4 w-full h-[50%]">
      <div className="flex items-center justify-center my-4 pb-2 border-b-border border-b w-full">
        <p className="text-2xl font-semibold">Resumen personal</p>
      </div>
      <div className="flex flex-col justify-center mr-auto p-4 gap-4  border-b-border border-b">
        <div className="flex gap-4 items-center">
          <div className=" rounded-xl bg-warning/12 text-warning p-3 h-full w-fit ">
            <Clock size={30} />
          </div>
          <div className="flex flex-col justify-center">
            <p>Tareas pendientes</p>
            <p className="text-2xl font-semibold text-zies-azul-1">5</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className=" rounded-xl bg-zies-azul-1/12 text-zies-azul-1 p-3 h-full w-fit ">
            <FileText size={30} />
          </div>
          <div className="flex flex-col justify-center">
            <p>En revisión</p>
            <p className="text-2xl font-semibold text-zies-azul-1">6</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className=" rounded-xl bg-success/12 text-success p-3 h-full w-fit ">
            <CircleCheckBig size={30} />
          </div>
          <div className="flex flex-col justify-center">
            <p>Terminadas</p>
            <p className="text-2xl font-semibold text-zies-azul-1">7</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mr-auto p-4 gap-2  mt-2 pb-2">
        <p>Próxima entrega</p>
        <div className="flex flex-col p-4 bg-error/12 rounded-xl">
          <div className="flex gap-2">
            <Calendar className="text-error" />
            <p>20 de Junio</p>
          </div>
          <p className="text-muted-foreground">
            AdS R1: Sistema de cobro contactless
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArchitectOverview;
