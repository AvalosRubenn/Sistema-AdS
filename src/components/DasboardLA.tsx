import { Moon } from "lucide-react";
import ActiveProject from "./ActiveProject";
import TeamStress from "./TeamStress";
import type { SingleStressProps } from "./SingleStress";
import GeneralStats from "./GeneralStats";
import Calendar from "./Calendar";

const proyectos = [
  {
    nombreDelProyecto: "Sistema ADS",
    celula: "No hay pa jajaja",
    porcentaje: 15,
    fecha: "15 ago",
    prioridad: "MEDIA",
  },
  {
    nombreDelProyecto: "Sistema de cobro contactless",
    celula: "Actinver 2.0",
    porcentaje: 60,
    fecha: "20 ago",
    prioridad: "ALTA",
  },
  {
    nombreDelProyecto: "Garmin Forerunner 4",
    celula: "Garmin",
    porcentaje: 80,
    fecha: "25 junio",
    prioridad: "BAJA",
  },
  {
    nombreDelProyecto: "Cumple de Rubén",
    celula: "Ruben",
    porcentaje: 50,
    fecha: "15 junio",
    prioridad: "ALTA",
  },
  {
    nombreDelProyecto: "Medio Maratón",
    celula: "Ruben",
    porcentaje: 99,
    fecha: "16 mayo",
    prioridad: "BAJA",
  },
];

const teamStressData: SingleStressProps[] = [
  {
    nombre: "Rubén Avalos",
    numeroDeProyectos: 3,
    porcentaje: 25,
  },
  {
    nombre: "Jhonatan Vergara",
    numeroDeProyectos: 6,
    porcentaje: 97,
  },
  {
    nombre: "Karim Aguilera",
    numeroDeProyectos: 4,
    porcentaje: 70,
  },
  {
    nombre: "Isaias Martinez",
    numeroDeProyectos: 8,
    porcentaje: 99,
  },
  { nombre: "Claudia Sheinbaum", numeroDeProyectos: 67, porcentaje: 67 },
  {
    nombre: "Andres Manuel Lopez Obrador",
    numeroDeProyectos: 1,
    porcentaje: 20,
  },
];

function DashboardLA() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
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
          <Moon />
        </button>
      </div>

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
          {proyectos.map((p) => (
            <ActiveProject
              nombreDelProyecto={p.nombreDelProyecto}
              celula={p.celula}
              porcentaje={p.porcentaje}
              fecha={p.fecha}
              prioridad={p.prioridad}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-12 gap-6">
        <Calendar />

        <div className="col-span-3 space-y-6">
          <TeamStress integrantes={teamStressData} />

          <GeneralStats
            ADSR1={11}
            ADSR2={10}
            ADSR3={6}
            ADSCNBV={7}
            ADSDiscovery={12}
            Asesorias={16}
            buenaSalud={7}
            mediaSalud={4}
            malaSalud={3}
          />
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
