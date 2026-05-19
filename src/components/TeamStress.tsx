import SingleStress from "./SingleStress";
import type { SingleStressProps } from "./SingleStress";

interface TeamStressProps {
  integrantes: SingleStressProps[];
}

function TeamStress({ integrantes }: TeamStressProps) {
  return (
    <div className="rounded-2xl border border-border p-5 shadow-sm bg-background">
      <h2 className="mb-6 text-2xl font-semibold">Estrés del equipo</h2>

      <div className="space-y-5">
        {integrantes.map((i) => (
          <SingleStress
            nombre={i.nombre}
            numeroDeProyectos={i.numeroDeProyectos}
            porcentaje={i.porcentaje}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamStress;
