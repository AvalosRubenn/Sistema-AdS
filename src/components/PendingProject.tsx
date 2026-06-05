import { FileText, Plus } from "lucide-react";
export interface PendingProjectProps {
  titulo: string;
  fecha: string;
  codigo: string;
  descripcion: string;
  onClick?: () => void;
}

{
  /*Cuando el back sea agregado, hay que cambiar este onClick, no tiene sentido seguirlo 
  cargando y mucho menos en la interfaz, que probablemente sería mejor como un tipo.
  Será mejor guardar que en el componente principal (Inbox.tsx) se use el ID del proyecto 
  para llamar a la API de nuevo y de ahí tomar los datos detallados del proyecto.*/
}
function PendingProject({
  titulo,
  fecha,
  codigo,
  onClick,
}: PendingProjectProps) {
  return (
    <div className="w-full bg-background shadow-sm p-5 rounded-2xl flex">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-zies-azul-1">{titulo}</h3>

        <div className="flex items-center gap-8 text-sm mt-1 text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText size={14} />
            <span>ZIES-{codigo}</span>
          </div>
          <span>Fecha: {fecha}</span>
        </div>
      </div>
      <button
        className="ml-auto mr-2 bg-muted rounded-2xl px-3 py-1 flex gap-2 items-center"
        onClick={onClick}
      >
        <p>Ver más</p>
        <Plus size={18} />
      </button>
    </div>
  );
}

export default PendingProject;
