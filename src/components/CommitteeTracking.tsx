function ComitteeTracking() {
  return (
    <div className="mt-8 rounded-2xl border border-border bg-background shadow-sm">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-2xl font-semibold ">Seguimiento del Comité</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Densidad de aprobaciones por periodo
        </p>
      </div>
      {/*Cambiar a componentes individuales, con cambio de color automático*/}
      <div className="grid grid-cols-12 p-6">
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
          <span className="text-xs uppercase">ENE</span>
          <span className="mt-2 text-2xl font-bold">1</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-500 text-white">
          <span className="text-xs uppercase">FEB</span>
          <span className="mt-2 text-2xl font-bold">6</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-cyan-600 text-white">
          <span className="text-xs uppercase">MAR</span>
          <span className="mt-2 text-2xl font-bold">7</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
          <span className="text-xs uppercase">ABR</span>
          <span className="mt-2 text-2xl font-bold">1</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-muted">
          <span className="text-xs uppercase">MAY</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-zies-azul-2 text-white">
          <span className="text-xs uppercase">JUN</span>
          <span className="mt-2 text-2xl font-bold">15</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
          <span className="text-xs uppercase">JUL</span>
          <span className="mt-2 text-2xl font-bold">1</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
          <span className="text-xs uppercase">AGO</span>
          <span className="mt-2 text-2xl font-bold">3</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-muted">
          <span className="text-xs uppercase">SEP</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-muted">
          <span className="text-xs uppercase">OCT</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
          <span className="text-xs uppercase">NOV</span>
          <span className="mt-2 text-2xl font-bold">2</span>
        </div>
        <div className="flex h-20 w-[90%] flex-col items-center justify-center rounded-xl bg-sky-500 text-white">
          <span className="text-xs uppercase">DIC</span>
          <span className="mt-2 text-2xl font-bold">4</span>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 px-6">
        <span className="text-xs text-muted-foreground">Menos</span>
        <div className="h-3 w-3 rounded bg-sky-100" />
        <div className="h-3 w-3 rounded bg-sky-200" />
        <div className="h-3 w-3 rounded bg-sky-300" />
        <div className="h-3 w-3 rounded bg-sky-500" />
        <div className="h-3 w-3 rounded bg-zies-azul-2" />
        <span className="text-xs text-muted-foreground">Más</span>
      </div>
      {/*Aquí también hay que cambiar a componentes individuales :p */}
      <div className="p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-4 text-sm font-medium text-muted-foreground">
                ID de Solicitud
              </th>
              <th className="pb-4 text-sm font-medium text-muted-foreground">
                Resolución
              </th>

              <th className="pb-4 text-sm font-medium text-muted-foreground">
                Comentarios
              </th>
              <th className="pb-4 text-sm font-medium text-muted-foreground">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="py-4 text-sm text-zies-azul-1">REQ-2026-080</td>
              <td className="py-4">
                <span className="rounded-md bg-emerald-100 text-success text-xs font-medium px-2 py-1">
                  Aprobado
                </span>
              </td>
              <td className="py-4 text-sm text-muted-foreground">Si chambea</td>
              <td className="py-4 text-sm text-muted-foreground">18 may</td>
            </tr>
            <tr>
              <td className="py-4 text-sm text-zies-azul-1">REQ-2026-067</td>

              <td className="py-4">
                <span
                  className="
                      rounded-md
                      bg-amber-100
                      px-2 py-1
                      text-xs font-medium text-warning
                    "
                >
                  Pendiente
                </span>
              </td>

              <td className="py-4 text-sm text-muted-foreground">
                A veces no chambea pa
              </td>

              <td className="py-4 text-sm text-muted-foreground">19 may</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComitteeTracking;
