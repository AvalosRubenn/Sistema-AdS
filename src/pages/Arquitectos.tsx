import { useState } from "react";
import ArchitectSelection from "../components/Architects/ArchitectSelection";
import type { Architect } from "../types/Architect";
import ArchitectInformation from "../components/Architects/ArchitectInformation";
import ArchitectSettings from "../components/Architects/ArchitectSettings";
import AddArchitectModal from "../components/Architects/AddArchitectModal";
import ArchitectRole from "../components/Architects/ArchitectRole";
import ArchitectSummary from "../components/Architects/ArchitectSummary";
import ArchitectSLAs from "../components/Architects/ArchitecsSLAs";
import ArchitectCommiteeStats from "../components/Architects/ArchitectCommitteeStats";
import ArchitectProjects from "../components/Architects/ArchitectProjects";
import ProjectDetailModal from "../components/ProjectDetailModal";
import ArchitectStress from "../components/Architects/ArchitectStress";
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
  {
    id: 2,
    name: "Alejandro",
    lastName: "Martinez",
    mail: "ruben.avalos@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Practicante",
    positionDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    performancePercentage: 50,
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
  {
    id: 3,
    name: "Jhonatan",
    lastName: "Vergara",
    mail: "jhonatan.vergara@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Lider de Arquitectura ADS",
    positionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    performancePercentage: 100,
    projectsActive: 2,
    projectsCanceled: 1,
    projectsClosed: 2,
    committeeAproved: 30,
    committeeDiscard: 8,
    committeeNA: 24,
    projects: 5,
    statusData: [
      {
        label: "Aprobado",
        value: 2,
        color: "#345995",
      },
      {
        label: "Descartado",
        value: 1,
        color: "#345995",
      },
      {
        label: "En curso",
        value: 1,
        color: "#345995",
      },
      {
        label: "Detenido",
        value: 1,
        color: "#345995",
      },
    ],
    complexityData: [
      {
        label: "Muy alta",
        value: 2,
        color: "#345995",
      },
      {
        label: "Alta",
        value: 1,
        color: "#345995",
      },
      {
        label: "Media",
        value: 1,
        color: "#345995",
      },
      {
        label: "Baja",
        value: 1,
        color: "#345995",
      },
      {
        label: "None",
        value: 0,
        color: "#345995",
      },
    ],
  },
  {
    id: 4,
    name: "Karim",
    lastName: "Aguilera",
    mail: "karim.aguilera@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Arquitecto Sr. de Datos",
    positionDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    performancePercentage: 100,
    projectsActive: 4,
    projectsCanceled: 0,
    projectsClosed: 16,
    projects: 20,
    committeeAproved: 25,
    committeeDiscard: 8,
    committeeNA: 15,
    statusData: [
      {
        label: "Aprobado",
        value: 7,
        color: "#345995",
      },
      {
        label: "Descartado",
        value: 2,
        color: "#345995",
      },
      {
        label: "En curso",
        value: 6,
        color: "#345995",
      },
      {
        label: "Detenido",
        value: 5,
        color: "#345995",
      },
    ],
    complexityData: [
      {
        label: "Muy alta",
        value: 8,
        color: "#345995",
      },
      {
        label: "Alta",
        value: 7,
        color: "#345995",
      },
      {
        label: "Media",
        value: 3,
        color: "#345995",
      },
      {
        label: "Baja",
        value: 1,
        color: "#345995",
      },
      {
        label: "None",
        value: 1,
        color: "#345995",
      },
    ],
  },
  {
    id: 5,
    name: "Jhon",
    lastName: "Doe",
    mail: "jhon.doe@zies-com.mx",
    permissions: "read-only",
    celula: "None",
    position: "Patrón",
    positionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    performancePercentage: 30,
    projects: 50,
    projectsActive: 25,
    projectsCanceled: 8,
    projectsClosed: 17,
    committeeAproved: 35,
    committeeDiscard: 40,
    committeeNA: 27,
    statusData: [
      {
        label: "Aprobado",
        value: 10,
        color: "#345995",
      },
      {
        label: "Descartado",
        value: 10,
        color: "#345995",
      },
      {
        label: "En curso",
        value: 10,
        color: "#345995",
      },
      {
        label: "Detenido",
        value: 20,
        color: "#345995",
      },
    ],
    complexityData: [
      {
        label: "Muy alta",
        value: 10,
        color: "#345995",
      },
      {
        label: "Alta",
        value: 10,
        color: "#345995",
      },
      {
        label: "Media",
        value: 10,
        color: "#345995",
      },
      {
        label: "Baja",
        value: 10,
        color: "#345995",
      },
      {
        label: "None",
        value: 10,
        color: "#345995",
      },
    ],
  },
  {
    id: 6,
    name: "Bilbo",
    lastName: "Bolson",
    mail: "bilbo.bolson@zies-com.mx",
    permissions: "admin",
    celula: "None",
    position: "Saqueador",
    positionDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    performancePercentage: 70,
    projects: 30,
    projectsActive: 5,
    projectsCanceled: 10,
    projectsClosed: 15,
    committeeAproved: 6,
    committeeDiscard: 7,
    committeeNA: 67,
    statusData: [
      {
        label: "Aprobado",
        value: 18,
        color: "#345995",
      },
      {
        label: "Descartado",
        value: 4,
        color: "#345995",
      },
      {
        label: "En curso",
        value: 6,
        color: "#345995",
      },
      {
        label: "Detenido",
        value: 2,
        color: "#345995",
      },
    ],
    complexityData: [
      {
        label: "Muy alta",
        value: 15,
        color: "#345995",
      },
      {
        label: "Alta",
        value: 3,
        color: "#345995",
      },
      {
        label: "Media",
        value: 7,
        color: "#345995",
      },
      {
        label: "Baja",
        value: 1,
        color: "#345995",
      },
      {
        label: "None",
        value: 4,
        color: "#345995",
      },
    ],
  },
];

const Celulas = ["Actinver 2.0", "Actinver 3.0", "Celula test"];
const Permisos = [
  "Read only",
  "Admin",
  "Admin temporal",
  "Lider de equipo",
  "Arquitecto",
];

function Arquitectos() {
  const [arquitectoSeleccionado, setArquitectoSeleccionado] =
    useState<Architect>(Architects[0]);
  const [settingsModal, setSettingsModal] = useState(false);
  const [addArchitectModal, setAddArchitectModal] = useState(false);
  const [projectDetailModal, setProjectDetailModal] = useState(false);
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 items-start">
        <h1 className="text-4xl font-bold">Arquitectos</h1>
      </div>
      {settingsModal && (
        <ArchitectSettings
          Celulas={Celulas}
          Permisos={Permisos}
          onClose={() => setSettingsModal(false)}
          architect={arquitectoSeleccionado}
        />
      )}
      {addArchitectModal && (
        <AddArchitectModal
          onClose={() => setAddArchitectModal(false)}
          Celulas={Celulas}
          Permisos={Permisos}
        />
      )}

      {projectDetailModal && (
        <ProjectDetailModal onClose={() => setProjectDetailModal(false)} />
      )}
      <ArchitectSelection
        arquitectos={Architects}
        onClick={setArquitectoSeleccionado}
        onArchitectSettings={() => setSettingsModal(true)}
        onAddArchitect={() => setAddArchitectModal(true)}
      />
      <div className="grid grid-cols-[280px_1fr] gap-6 mt-6">
        <div className="flex flex-col gap-4">
          <ArchitectInformation arquitecto={arquitectoSeleccionado} />

          <ArchitectRole arquitecto={arquitectoSeleccionado} />
          <ArchitectStress arquitecto={arquitectoSeleccionado} />
        </div>
        <div className="flex flex-col gap-4">
          <ArchitectSummary arquitecto={arquitectoSeleccionado} />
          <div className="flex items-center gap-4 ">
            <ArchitectSLAs arquitecto={arquitectoSeleccionado} />
            <ArchitectCommiteeStats arquitecto={arquitectoSeleccionado} />
          </div>
          <ArchitectProjects onClick={() => setProjectDetailModal(true)} />
        </div>
      </div>
    </div>
  );
}

export default Arquitectos;
