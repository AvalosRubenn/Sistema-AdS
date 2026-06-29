import { ArrowLeft } from "lucide-react";

function ProyectoDetalle() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="flex gap-2 text-zies-azul-1">
        <ArrowLeft size={20} />
        <p>Volver</p>
      </div>
    </div>
  );
}

export default ProyectoDetalle;
