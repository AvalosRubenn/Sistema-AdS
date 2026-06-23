import Kanban from "../components/Kanban/Kanban";
import ProjectSelection from "../components/Projects/ProjectSelection";
import type { KanbanCardProps } from "../components/Kanban/KanbanCard";

const Projects: string[] = [
  "Cuentas remuneradas",
  "Papu cryptos",
  "Actinver 3.0",
];

const ToDo: KanbanCardProps[] = [
  {
    name: "R1 - Investigación inicial",
    project: "Cuentas remuneradas",
    priority: "BAJA",
    date: "20 jun",
  },
];
const Doing: KanbanCardProps[] = [
  {
    name: "R1 - Investigación inicial",
    project: "Papu cryptos",
    priority: "BAJA",
    date: "20 jun",
  },
  {
    name: "R2 - Diagrama de Arquitectura",
    project: "Papu cryptos",
    priority: "MEDIA",
    date: "20 jun",
  },
  {
    name: "R3 - Planeación de blockchain",
    project: "Papu cryptos",
    priority: "ALTA",
    date: "20 jun",
  },
  {
    name: "R3 - Planeación de rugpull",
    project: "Papu cryptos",
    priority: "ALTA",
    date: "20 jun",
  },
  {
    name: "R3 - Planeación de rugpull 2",
    project: "Papu cryptos",
    priority: "ALTA",
    date: "20 jun",
  },
];
const Ready: KanbanCardProps[] = [
  {
    name: "R1 - Investigación inicial",
    project: "Cuentas remuneradas",
    priority: "MEDIA",
    date: "20 jun",
  },
  {
    name: "R2 - Investigación inicial",
    project: "Cuentas remuneradas",
    priority: "ALTA",
    date: "28 jun",
  },
  {
    name: "R1 - Investigación inicial",
    project: "Cuentas remuneradas",
    priority: "ALTA",
    date: "30 jun",
  },
];
const Done: KanbanCardProps[] = [
  {
    name: "R1 - Investigación inicial",
    project: "Migración AWS",
    priority: "MEDIA",
    date: "20 jun",
  },
  {
    name: "Discovery - Actinver",
    project: "Actinver 3.0",
    priority: "ALTA",
    date: "3 jul",
  },
];

function EntregaDeTareas() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 items-start">
        <h1 className="text-4xl font-bold ">Entrega de Tareas</h1>
      </div>
      <ProjectSelection projects={Projects} />
      <Kanban ToDo={ToDo} Doing={Doing} Ready={Ready} Done={Done} />
    </div>
  );
}

export default EntregaDeTareas;
