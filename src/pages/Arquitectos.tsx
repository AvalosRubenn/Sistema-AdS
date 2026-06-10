import { useState } from "react";
import ArchitectSelection from "../components/Architects/ArchitectSelection";
import type { Architect } from "../types/Architect";
import ArchitectInformation from "../components/Architects/ArchitectInformation";
import ArchitectSettings from "../components/Architects/ArchitectSettings";
import AddArchitectModal from "../components/Architects/AddArchitectModal";
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
  },
  {
    id: 2,
    name: "Alejandro",
    lastName: "Martinez",
    mail: "ruben.avalos@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Practicante",
  },
  {
    id: 3,
    name: "Jhonatan",
    lastName: "Vergara",
    mail: "jhonatan.vergara@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Lider de Arquitectura ADS",
  },
  {
    id: 4,
    name: "Karim",
    lastName: "Aguilera",
    mail: "karim.aguilera@zies.com.mx",
    permissions: "admin",
    celula: "None",
    position: "Arquitecto Sr. de Datos",
  },
  {
    id: 5,
    name: "Jhon",
    lastName: "Doe",
    mail: "jhon.doe@zies-com.mx",
    permissions: "read-only",
    celula: "None",
    position: "Patrón",
  },
  {
    id: 6,
    name: "Bilbo",
    lastName: "Bolson",
    mail: "bilbo.bolson@zies-com.mx",
    permissions: "admin",
    celula: "None",
    position: "Saqueador",
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
      <ArchitectInformation arquitecto={arquitectoSeleccionado} />
    </div>
  );
}

export default Arquitectos;
