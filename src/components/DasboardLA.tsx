import { Moon } from "lucide-react";
import ActiveProject from "./ActiveProject";
import TeamStress from "./TeamStress";
import type { SingleStressProps } from "./SingleStress";
import GeneralStats from "./GeneralStats";
import Calendar from "./Calendar";
import ComitteeTracking from "./CommitteeTracking";

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

      <ComitteeTracking />
    </div>
  );
}

export default DashboardLA;
