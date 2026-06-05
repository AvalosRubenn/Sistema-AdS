import { FileText, CircleCheck, CircleX } from "lucide-react";
export interface PendingProjectProps {
  titulo: string;
  fecha: string;
  codigo: string;
}
function PendingProject({ titulo, fecha, codigo }: PendingProjectProps) {
  return (
    <div className="w-full bg-background shadow-sm p-7 rounded-2xl flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-zies-azul-1">{titulo}</h3>

      <div className="mb-5 flex items-center gap-8 text-sm mt-1 text-muted-foreground">
        <div className="flex items-center gap-2">
          <FileText size={14} />
          <span>ZIES-{codigo}</span>
        </div>
        <span>Fecha: {fecha}</span>
      </div>
      <div className="border-t border-border pt-4">
        <div className="flex gap-4">
          <button className="rounded-xl bg-success px-4 py-3 text-md font-medium text-white hover:opacity-85 flex items-center gap-2">
            <CircleCheck size={20} />
            Aceptar
          </button>
          <button className="rounded-xl bg-background px-4 py-3 text-md text-error font-medium border border-error  hover:opacity-85 flex items-center gap-2">
            <CircleX size={20} />
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}

export default PendingProject;
