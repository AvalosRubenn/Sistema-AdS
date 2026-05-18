import { Moon } from "lucide-react";
import Calendar from "./Calendar";

function DashboardLA() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      {/* HEADER */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold text-zies-azul-1">
            Panel de Líder
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Supervisión estratégica y gestión de cartera de proyectos
          </p>
        </div>

        <button
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            border border-border
            bg-background
          "
        >
          ☾
        </button>
      </div>

      {/* ACTIVE PROJECTS */}
      <div className="rounded-2xl border border-border bg-background shadow-sm">
        <div className="border-b border-border px-6 py-5">
          <h2 className="text-2xl font-semibold text-zies-azul-1">
            Proyectos Activos
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            6 proyectos en curso
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 p-5">
          {/* CARD */}
          <div className="rounded-xl border border-border p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zies-azul-1">
                  Estrategia de Transformación Digital
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Célula: Estrategia
                </p>
              </div>

              <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progreso</span>

              <span className="text-sm font-medium text-zies-azul-1">65%</span>
            </div>

            <div className="mb-4 h-2 rounded-full bg-muted">
              <div className="h-2 w-[65%] rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between">
              <span className="rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                ALTA
              </span>

              <span className="text-xs text-muted-foreground">14 abr</span>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zies-azul-1">
                  Análisis de Entrada al Mercado
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Célula: Investigación
                </p>
              </div>

              <div className="mt-1 h-3 w-3 rounded-full bg-amber-500" />
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progreso</span>

              <span className="text-sm font-medium text-zies-azul-1">40%</span>
            </div>

            <div className="mb-4 h-2 rounded-full bg-muted">
              <div className="h-2 w-[40%] rounded-full bg-amber-500" />
            </div>

            <div className="flex items-center justify-between">
              <span className="rounded-md bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                ALTA
              </span>

              <span className="text-xs text-muted-foreground">9 abr</span>
            </div>
          </div>

          <div className="rounded-xl border border-border p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-zies-azul-1">
                  Revisión de Excelencia Operacional
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Célula: Operaciones
                </p>
              </div>

              <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />
            </div>

            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Progreso</span>

              <span className="text-sm font-medium text-zies-azul-1">85%</span>
            </div>

            <div className="mb-4 h-2 rounded-full bg-muted">
              <div className="h-2 w-[85%] rounded-full bg-emerald-500" />
            </div>

            <div className="flex items-center justify-between">
              <span className="rounded-md bg-amber-500 px-2 py-1 text-xs font-semibold text-white">
                MEDIA
              </span>

              <span className="text-xs text-muted-foreground">7 abr</span>
            </div>
          </div>
        </div>
      </div>

      {/* CALENDAR + SIDEBAR */}
      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* CALENDAR */}
        <div className="col-span-9 rounded-2xl border border-border bg-background p-6 shadow-sm">
          <div className="mb-8 flex items-start justify-between">
            <button
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-muted
                text-zies-azul-1
              "
            >
              ←
            </button>

            <div className="text-center">
              <h2 className="text-6xl font-light text-zies-azul-1">abril</h2>

              <p className="mt-2 text-lg text-muted-foreground">2026</p>

              <div className="mt-6">
                <h3 className="text-7xl font-light text-zies-azul-2">13</h3>

                <p className="mt-2 text-base text-muted-foreground">lunes</p>
              </div>
            </div>

            <button
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                bg-muted
                text-zies-azul-1
              "
            >
              →
            </button>
          </div>

          <div className="mb-4 grid grid-cols-7 gap-4 text-center text-sm text-muted-foreground">
            <span>Dom</span>
            <span>Lun</span>
            <span>Mar</span>
            <span>Mié</span>
            <span>Jue</span>
            <span>Vie</span>
            <span>Sáb</span>
          </div>

          <div className="grid grid-cols-7 gap-4">
            <div />
            <div />
            <div />

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              1
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              2
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              3
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              4
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              5
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              6
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              7
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              8
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              9
            </div>

            <div
              className="
                flex h-24 items-center justify-center
                rounded-2xl
                border-2 border-zies-azul-2
              "
            >
              10
            </div>

            <div className="flex h-24 items-center justify-center rounded-2xl border border-border">
              11
            </div>

            <div
              className="
                flex h-24 items-center justify-center
                rounded-2xl
                bg-zies-azul-2
                text-white
              "
            >
              13
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-3 space-y-6">
          {/* TEAM STRESS */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-zies-azul-1">
              Estrés del Equipo
            </h2>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-zies-azul-1">
                    Ana García
                  </span>

                  <span className="text-muted-foreground">
                    3 proyectos · 75%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[75%] rounded-full bg-amber-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-zies-azul-1">
                    Carlos Ruiz
                  </span>

                  <span className="text-muted-foreground">
                    5 proyectos · 92%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[92%] rounded-full bg-red-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-zies-azul-1">
                    María López
                  </span>

                  <span className="text-muted-foreground">
                    2 proyectos · 45%
                  </span>
                </div>

                <div className="h-2 rounded-full bg-muted">
                  <div className="h-2 w-[45%] rounded-full bg-emerald-500" />
                </div>
              </div>
            </div>
          </div>

          {/* GENERAL STATS */}
          <div className="rounded-2xl border border-border bg-background p-5 shadow-sm">
            <h2 className="mb-6 text-2xl font-semibold text-zies-azul-1">
              Estadísticas Generales
            </h2>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">ADS R1</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">5</h3>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">ADS R2</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">8</h3>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">ADS R3</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">12</h3>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">CNEV</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">3</h3>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Discovery</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">7</h3>
              </div>

              <div className="rounded-xl bg-muted p-4">
                <p className="text-xs text-muted-foreground">Advisory</p>

                <h3 className="mt-2 text-2xl font-bold text-zies-azul-1">9</h3>
              </div>
            </div>

            {/* FOOTER */}
            <div className="mt-6">
              <p className="mb-3 text-xs text-muted-foreground">
                Distribución de Salud
              </p>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>2</span>
                </div>

                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-amber-500" />
                  <span>1</span>
                </div>

                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-red-500" />
                  <span>1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COMMITTEE TRACKING */}
      <div className="mt-8 rounded-2xl border border-border bg-background shadow-sm">
        {/* HEADER */}
        <div className="border-b border-border px-6 py-5">
          <h2 className="text-2xl font-semibold text-zies-azul-1">
            Seguimiento del Comité
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Densidad de aprobaciones por periodo
          </p>
        </div>

        {/* MONTHS */}
        <div className="flex gap-3 px-6 py-6">
          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
            <span className="text-xs uppercase">ENE</span>
            <span className="mt-2 text-2xl font-bold">1</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-xs uppercase">FEB</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-sky-500 text-white">
            <span className="text-xs uppercase">MAR</span>
            <span className="mt-2 text-2xl font-bold">2</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-cyan-600 text-white">
            <span className="text-xs uppercase">ABR</span>
            <span className="mt-2 text-2xl font-bold">3</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-xs uppercase">MAY</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-zies-azul-2 text-white">
            <span className="text-xs uppercase">JUN</span>
            <span className="mt-2 text-2xl font-bold">8</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-xs uppercase">JUL</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-sky-300 text-white">
            <span className="text-xs uppercase">AGO</span>
            <span className="mt-2 text-2xl font-bold">1</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-xs uppercase">SEPT</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-sky-200 text-white">
            <span className="text-xs uppercase">OCT</span>
            <span className="mt-2 text-2xl font-bold">1</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-muted">
            <span className="text-xs uppercase">NOV</span>
          </div>

          <div className="flex h-20 w-16 flex-col items-center justify-center rounded-xl bg-zies-azul-2 text-white">
            <span className="text-xs uppercase">DIC</span>
            <span className="mt-2 text-2xl font-bold">6</span>
          </div>
        </div>

        {/* LEGEND */}
        <div className="flex items-center justify-end gap-2 px-6">
          <span className="text-xs text-muted-foreground">Menos</span>

          <div className="h-3 w-3 rounded bg-sky-100" />
          <div className="h-3 w-3 rounded bg-sky-200" />
          <div className="h-3 w-3 rounded bg-sky-300" />
          <div className="h-3 w-3 rounded bg-sky-500" />
          <div className="h-3 w-3 rounded bg-zies-azul-2" />

          <span className="text-xs text-muted-foreground">Más</span>
        </div>

        {/* TABLE */}
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
                <td className="py-4 text-sm text-zies-azul-1">REQ-2024-045</td>

                <td className="py-4">
                  <span
                    className="
                      rounded-md
                      bg-emerald-100
                      px-2 py-1
                      text-xs font-medium text-emerald-700
                    "
                  >
                    Aprobado
                  </span>
                </td>

                <td className="py-4 text-sm text-muted-foreground">
                  Alineación estratégica confirmada
                </td>

                <td className="py-4 text-sm text-muted-foreground">14 mar</td>
              </tr>

              <tr className="border-b border-border">
                <td className="py-4 text-sm text-zies-azul-1">REQ-2024-046</td>

                <td className="py-4">
                  <span
                    className="
                      rounded-md
                      bg-emerald-100
                      px-2 py-1
                      text-xs font-medium text-emerald-700
                    "
                  >
                    Aprobado
                  </span>
                </td>

                <td className="py-4 text-sm text-muted-foreground">—</td>

                <td className="py-4 text-sm text-muted-foreground">17 mar</td>
              </tr>

              <tr className="border-b border-border">
                <td className="py-4 text-sm text-zies-azul-1">REQ-2024-047</td>

                <td className="py-4">
                  <span
                    className="
                      rounded-md
                      bg-red-100
                      px-2 py-1
                      text-xs font-medium text-red-700
                    "
                  >
                    Rechazado
                  </span>
                </td>

                <td className="py-4 text-sm text-muted-foreground">
                  Restricciones presupuestarias
                </td>

                <td className="py-4 text-sm text-muted-foreground">19 mar</td>
              </tr>

              <tr className="border-b border-border">
                <td className="py-4 text-sm text-zies-azul-1">REQ-2024-048</td>

                <td className="py-4">
                  <span
                    className="
                      rounded-md
                      bg-emerald-100
                      px-2 py-1
                      text-xs font-medium text-emerald-700
                    "
                  >
                    Aprobado
                  </span>
                </td>

                <td className="py-4 text-sm text-muted-foreground">
                  Acelerado para Q2
                </td>

                <td className="py-4 text-sm text-muted-foreground">21 mar</td>
              </tr>

              <tr>
                <td className="py-4 text-sm text-zies-azul-1">REQ-2024-049</td>

                <td className="py-4">
                  <span
                    className="
                      rounded-md
                      bg-amber-100
                      px-2 py-1
                      text-xs font-medium text-amber-700
                    "
                  >
                    Pendiente
                  </span>
                </td>

                <td className="py-4 text-sm text-muted-foreground">—</td>

                <td className="py-4 text-sm text-muted-foreground">24 mar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardLA;
