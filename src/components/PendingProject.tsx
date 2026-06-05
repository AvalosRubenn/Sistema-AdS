import { FileText } from "lucide-react";
export interface PendingProjectProps {
  titulo: string;
  fecha: string;
  codigo: string;
}
function PendingProject({ titulo, fecha, codigo }: PendingProjectProps) {
  return (
    <div className="w-full bg-background shadow-sm p-5 rounded-2xl flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-zies-azul-1">{titulo}</h3>

      <div className="flex items-center gap-8 text-sm mt-1 text-muted-foreground">
        <div className="flex items-center gap-2">
          <FileText size={14} />
          <span>ZIES-{codigo}</span>
        </div>
        <span>Fecha: {fecha}</span>
      </div>
    </div>
  );
}

export default PendingProject;
