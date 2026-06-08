import { useState } from "react";
import PendingProject from "../components/PendingProject";
import type { PendingProjectProps } from "../components/PendingProject";
import PendingProjectModal from "../components/PendingProjectModal";
import ProjectCreationModal from "../components/ProjectCreationModal";

const proyectosPendientes: PendingProjectProps[] = [
  {
    titulo: "Proyecto de desarrollo movil final",
    fecha: "10 de junio",
    codigo: "0001",
    descripcion: "Hacen falta la sección 8 y 9 del pdf.",
  },
  {
    titulo: "Cumple de Rubén",
    fecha: "15 de junio",
    codigo: "1234",
    descripcion:
      "No sé que voy a hacer, pero no me quiero quedar entre mi casa jaja, saquenme a pasear.",
  },
  {
    titulo: "Medio maratón de Karim",
    fecha: "21 de junio",
    codigo: "2110",
    descripcion:
      "21k de puro sufrimiento, pace estimado de 5:30, tiempo total estimado de 1 hora y 57 mins. SUB 2 horas.",
  },
];

function Inbox() {
  const [selectedProject, setSelectedProject] =
    useState<PendingProjectProps | null>(null);
  const [acceptedProject, setAcceptedProject] =
    useState<PendingProjectProps | null>(null);

  const ModalBack = () => {
    setSelectedProject(acceptedProject);
    setAcceptedProject(null);
  };
  {
    /*ModalBack permite intercambiar el proyecto actual entre los estados de selectedProject y acceptedProject,
    de manera que solo es necesario enviar una función al componente de ProjectCreationModal*/
  }
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <h1 className="mb-6 text-4xl font-bold text-zies-azul-1">Inbox</h1>

      <h2 className="text-2xl font-semibold text-zies-azul-1 mb-4">
        Solicitudes pendientes
      </h2>
      <div className="flex flex-col items-center gap-4">
        {proyectosPendientes.map((p) => (
          <PendingProject
            titulo={p.titulo}
            fecha={p.fecha}
            codigo={p.codigo}
            descripcion={p.descripcion}
            onClick={() => setSelectedProject(p)}
            key={p.codigo}
          />
        ))}
      </div>
      {selectedProject && (
        <PendingProjectModal
          pendingProject={selectedProject}
          onClose={() => setSelectedProject(null)}
          onAccept={() => setAcceptedProject(selectedProject)}
        />
      )}
      {acceptedProject && <ProjectCreationModal onClose={ModalBack} />}
    </div>
  );
}

export default Inbox;
