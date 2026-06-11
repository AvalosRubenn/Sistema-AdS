import { useState } from "react";
import ArchitectSelection from "../components/Architects/ArchitectSelection";
import type { Architect } from "../types/Architect";
import ArchitectInformation from "../components/Architects/ArchitectInformation";
import ArchitectSettings from "../components/Architects/ArchitectSettings";
import AddArchitectModal from "../components/Architects/AddArchitectModal";
import ArchitectRole from "../components/Architects/ArchitectRole";
import ArchitectSummary from "../components/Architects/ArchitectSummary";
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
        </div>

        <ArchitectSummary />
      </div>
    </div>
  );
}

export default Arquitectos;
