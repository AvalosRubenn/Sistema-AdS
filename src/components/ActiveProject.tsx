type Prioridad = "ALTA" | "MEDIA" | "BAJA";
interface ActiveProjectProps {
  nombreDelProyecto: string;
  celula: string;
  porcentaje: number;
  fecha: string;
  prioridad: Prioridad;
}

const priorityStyles = {
  ALTA: { badge: "bg-error" },
  MEDIA: { badge: "bg-warning" },
  BAJA: { badge: "bg-success" },
};

function getStatusColor(porcentaje: number) {
  if (porcentaje <= 33) return "bg-error";
  if (porcentaje <= 67) return "bg-warning";
  return "bg-success";
}

function ActiveProject({
  nombreDelProyecto,
  celula,
  porcentaje,
  fecha,
  prioridad,
}: ActiveProjectProps) {
  const styles = priorityStyles[prioridad];
  const colorStatus = getStatusColor(porcentaje);
  return (
    <div className="rounded-xl border border-border p-5">
      <div className="mb-4 flex items-start justify-between ">
        <div>
          <h3 className="text-lg font-semibold text-zies-azul-1">
            {nombreDelProyecto}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Célula: {celula}</p>
        </div>
        <div className={`rounded-full ${colorStatus} w-3 h-3`} />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Progreso</span>
        <span className="text-sm text-muted-foreground">{porcentaje}%</span>
      </div>

      <div className="mb-4 h-2 rounded-full bg-muted">
        <div
          style={{ width: `${porcentaje}%` }}
          className={`h-2 rounded-full ${colorStatus}`}
        />
      </div>

      <div className="flex items-center justify-between">
        <span
          className={`rounded-md ${styles.badge} px-2 py-1 text-xs font-semibold text-white`}
        >
          {prioridad}
        </span>
        <span className="text-xs text-muted-foreground">{fecha}</span>
      </div>
    </div>
  );
}

export default ActiveProject;
