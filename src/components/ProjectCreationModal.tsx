import { MoveLeft, CircleCheckBig } from "lucide-react";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
interface ProjectCreationModalProps {
  onClose: () => void;
}

const Options = [
  "ADS R1",
  "ADS R2",
  "ADS R3",
  "ADS CNBV",
  "ADS Discovery",
  "ADS Asesorias",
];

function ProjectCreationModal({ onClose }: ProjectCreationModalProps) {
  const [adsLevel, setAdsLevel] = useState("Selecciona un nivel de ADS");
  const onAdsLevel = (option: string) => {
    setAdsLevel(option);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6 ">
        <button onClick={onClose}>
          <MoveLeft size={18} />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className=" bg-green-200 rounded-full p-2">
            <CircleCheckBig size={30} className="text-success" />
          </div>
          <div className="flex flex-col justify-center gap-2">
            <h3 className="text-2xl">Aceptar Solicitud</h3>
            <p>Esto asignará el proyecto a un arquitecto</p>
          </div>
        </div>
        <div className="bg-muted h-full w-full rounded-2xl p-4 flex gap-4 items-center">
          <h4 className="">Nivel de Ads</h4>
          <Dropdown
            selected={adsLevel}
            options={Options}
            onAdsLevel={onAdsLevel}
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectCreationModal;
