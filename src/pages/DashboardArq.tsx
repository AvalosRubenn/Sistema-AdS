import type { ActiveProjectProps } from "../components/ActiveProject";
import ArchitectStress from "../components/Architects/ArchitectStress";
import ActiveProjects from "../components/Projects/ActiveProjects";
import type { Architect } from "../types/Architect";
const proyectos: ActiveProjectProps[] = [
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
const Architects: Architect[] = [
  {
    id: 1,
    name: "Ruben",
    lastName: "Avalos",
    mail: "ruben.avalos@zies.com.mx",
    permissions: "admin",
    celula: "None",
    img: "ruben.png",
    position: "Practicante",
    positionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    performancePercentage: 81,
    projects: 67,
    projectsActive: 20,
    projectsCanceled: 20,
    projectsClosed: 37,
    committeeAproved: 16,
    committeeDiscard: 10,
    committeeNA: 7,
    statusData: [
      {
        label: "Aprobado",
        value: 30,
        color: "#345995",
      },
      {
        label: "Descartado",
        value: 20,
        color: "#345995",
      },
      {
        label: "En curso",
        value: 5,
        color: "#345995",
      },
      {
        label: "Detenido",
        value: 12,
        color: "#345995",
      },
    ],
    complexityData: [
      {
        label: "Muy alta",
        value: 20,
        color: "#345995",
      },
      {
        label: "Alta",
        value: 10,
        color: "#345995",
      },
      {
        label: "Media",
        value: 22,
        color: "#345995",
      },
      {
        label: "Baja",
        value: 7,
        color: "#345995",
      },
      {
        label: "None",
        value: 8,
        color: "#345995",
      },
    ],
  },
];
function DashboardArq() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 flex items-start justify-between">
        <h1 className="text-4xl font-bold text-zies-azul-1">
          Panel de arquitecto
        </h1>
      </div>
      <div className="flex w-full gap-6 ">
        <div className="flex-1">
          <ActiveProjects proyectos={proyectos} />
        </div>

        <div className="shrink-0">
          <ArchitectStress arquitecto={Architects[0]} />
        </div>
      </div>
    </div>
  );
}

export default DashboardArq;
