import PendingProject from "../components/PendingProject";
import type { PendingProjectProps } from "../components/PendingProject";

const proyectosPendientes: PendingProjectProps[] = [
  {
    titulo: "Proyecto de desarrollo movil final",
    fecha: "10 de junio",
    codigo: "0001",
  },
  {
    titulo: "Cumple de Rubén",
    fecha: "15 de junio",
    codigo: "1234",
  },
  {
    titulo: "Medio maratón de Karim",
    fecha: "21 de junio",
    codigo: "2110",
  },
];

function Inbox() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <h1 className="mb-6 text-4xl font-bold text-zies-azul-1">Inbox</h1>

      <h2 className="text-2xl font-semibold text-zies-azul-1 mb-4">
        Solicitudes pendientes
      </h2>
      <div className="flex flex-col itemx-center gap-4">
        {proyectosPendientes.map((p) => (
          <PendingProject
            titulo={p.titulo}
            fecha={p.fecha}
            codigo={p.codigo}
            key={p.codigo}
          />
        ))}
      </div>
    </div>
  );
}

export default Inbox;
