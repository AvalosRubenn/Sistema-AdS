import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function ProyectoDetalle() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <Link
        className="flex gap-2 text-zies-azul-2 items-center p-2 rounded-lg hover:bg-foreground/8 w-fit mr-auto"
        to="/proyectos"
      >
        <ArrowLeft size={20} />
        <p>Volver</p>
      </Link>
    </div>
  );
}

export default ProyectoDetalle;
