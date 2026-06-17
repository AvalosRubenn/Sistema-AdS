import type { ActiveProjectProps } from "../components/ActiveProject";
import ActiveProjects from "../components/Projects/ActiveProjects";
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
function DashboardArq() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 flex items-start justify-between">
        <h1 className="text-4xl font-bold text-zies-azul-1">
          Panel de arquitecto
        </h1>
      </div>
      <ActiveProjects proyectos={proyectos} />
    </div>
  );
}

export default DashboardArq;
