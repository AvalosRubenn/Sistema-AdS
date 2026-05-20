type Nivel = "BAJO" | "MEDIO" | "ALTO";
interface RiskCardProps {
  titulo: string;
  nivel: Nivel;
  activo: boolean;
  descripcion: string;
  responsable: string;
  fecha: string;
}

const levelStyles = {
  ALTO: "text-error bg-red-100",
  MEDIO: "text-warning bg-yellow-100",
  BAJO: "text-success bg-green-100",
};

function RiskCard({
  titulo,
  nivel,
  activo,
  descripcion,
  responsable,
  fecha,
}: RiskCardProps) {
  const styles = levelStyles[nivel];
  return (
    <div className="mt-6 pb-4 mb-4 mx-6 border border-border bg-muted rounded-xl flex flex-col">
      <div className="flex items-center justify-between mt-2 mx-6">
        <p className="text-xl">{titulo}</p>
        <p className={`px-2 py-1 text-xs rounded-lg ${styles}`}>{nivel}</p>
      </div>
      <p className="mt-2 mx-6 text-muted-foreground">{descripcion}</p>
      <div className="flex items-center justify-between mt-2 mx-6">
        <p className="mt-2 text-muted-foreground">
          {responsable} · {fecha}
        </p>
        {activo ? (
          <p className="text-error px-2 py-1 text-xs rounded-lg bg-red-100">
            Activo
          </p>
        ) : (
          <p className="text-success px-2 py-1 text-xs rounded-lg bg-green-100">
            Mitigado
          </p>
        )}
      </div>
    </div>
  );
}

export default RiskCard;
