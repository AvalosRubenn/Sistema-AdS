export interface SingleStressProps {
  nombre: string;
  numeroDeProyectos: number;
  porcentaje: number;
}

function getColorStatus(porcentaje: number) {
  if (porcentaje <= 33) return "bg-success";
  if (porcentaje <= 67) return "bg-warning";
  return "bg-error";
}

function SingleStress({
  nombre,
  numeroDeProyectos,
  porcentaje,
}: SingleStressProps) {
  const colorStatus = getColorStatus(porcentaje);
  return (
    <>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-medium text-zies-azul-1">{nombre}</span>

        <span className="text-muted-foreground">
          {numeroDeProyectos} proyectos · {porcentaje}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted">
        <div
          style={{ width: `${porcentaje}%` }}
          className={`h-2 rounded-full ${colorStatus}`}
        />
      </div>
    </>
  );
}

export default SingleStress;
