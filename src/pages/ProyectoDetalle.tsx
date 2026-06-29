import { ArrowLeft } from "lucide-react";

function ProyectoDetalle() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <button className="flex gap-2 text-zies-azul-2 items-center">
        <ArrowLeft size={20} />
        <p>Volver</p>
      </button>
    </div>
  );
}

export default ProyectoDetalle;
