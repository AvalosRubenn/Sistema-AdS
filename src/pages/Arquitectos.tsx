import { useState } from "react";
import ArchitectSelection from "../components/Architects/ArchitectSelection";
import type { Architect } from "../types/Architect";
import ArchitectInformation from "../components/Architects/ArchitectInformation";
import ArchitectSettings from "../components/Architects/ArchitectSettings";
const Architects: Architect[] = [
  {
    id: 1,
    name: "Ruben Avalos",
    img: "ruben.png",
    position: "Practicante",
  },
  {
    id: 2,
    name: "Alejandro Martinez",
    position: "Practicante",
  },
  {
    id: 3,
    name: "Jhonatan Vergara",
    position: "Lider de Arquitectura ADS",
  },
  {
    id: 4,
    name: "Karim Aguilera",
    position: "Arquitecto Sr. de Datos",
  },
  {
    id: 5,
    name: "Jhon Doe",
    position: "Patrón",
  },
  {
    id: 6,
    name: "Bilbo Bolson",
    position: "Saqueador",
  },
];

function Arquitectos() {
  const [arquitectoSeleccionado, setArquitectoSeleccionado] =
    useState<Architect>(Architects[0]);

  const [settingsModal, setSettingsModal] = useState(true);
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 items-start">
        <h1 className="text-4xl font-bold">Arquitectos</h1>
      </div>
      {settingsModal && (
        <ArchitectSettings onClose={() => setSettingsModal(false)} />
      )}
      <ArchitectSelection
        arquitectos={Architects}
        onClick={setArquitectoSeleccionado}
        onArchitectSettings={() => setSettingsModal(true)}
      />
      <ArchitectInformation arquitecto={arquitectoSeleccionado} />
    </div>
  );
}

export default Arquitectos;
