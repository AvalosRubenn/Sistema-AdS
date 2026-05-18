function ActiveProject() {
  return (
    <div className="rounded-xl border border-border p-5">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zies-azul-1">Hola papus</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Célula: Actinver 2.0
          </p>
        </div>
        <div className="rounded-full bg-emerald-500 w-3 h-3" />
      </div>

      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Progreso</span>
        <span className="text-sm text-muted-foreground">75%</span>
      </div>

      <div className="mb-4 h-2 rounded-full bg-muted">
        <div className="h-2 w-[75%] rounded-full bg-emerald-500" />
      </div>

      <div className="flex items-center justify-between">
        <span className="rounded-md bg-zies-rojo px-2 py-1 text-xs font-semibold text-white">
          ALTA
        </span>
        <span className="text-xs text-muted-foreground">21 abr</span>
      </div>
    </div>
  );
}

export default ActiveProject;
