import { useState } from "react";
import { Search } from "lucide-react";

import Task from "../components/Task";
import TaskModal from "../components/TaskModal";

import type { Tarea } from "../components/Task";
import SearchBar from "../components/SearchBar";

const tareas: Tarea[] = [
  {
    titulo: "Sistema Ads",
    proyecto: "Celula 1",
    arquitecto: "Rubén Avalos",
    fecha: "25 May, 15:00",
    version: "v1.2",
    entrega: "Entrega de Revisión de tareas",
    sharepoint: "https://sharepoint.com",
    comentariosArquitecto: "Se agregó la sección de Revisión de Tareas.",
  },
  {
    titulo: "Sistema Contactless",
    proyecto: "Actinver 2.0",
    arquitecto: "Ana Banana",
    fecha: "20 May, 12:00",
    version: "v1.5",
    entrega: "Documento de Investigación",
    sharepoint: "https://sharepoint.com",
    comentariosArquitecto: "Arquitectura mejorada",
  },
];

function RevisionDeTareas() {
  const [selectedTask, setSelectedTask] = useState<Tarea | null>(null);

  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <h1 className="mb-6 text-4xl font-bold text-zies-azul-1">
        Revisión de tareas
      </h1>

      <SearchBar />

      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        {tareas.map((tarea, index) => (
          <div
            key={tarea.titulo}
            className={
              index !== tareas.length - 1 ? "border-b border-border" : ""
            }
          >
            <Task tarea={tarea} onClick={() => setSelectedTask(tarea)} />
          </div>
        ))}
      </div>

      {selectedTask && (
        <TaskModal tarea={selectedTask} onClose={() => setSelectedTask(null)} />
      )}
    </div>
  );
}

export default RevisionDeTareas;
