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
const Architects = [
  "Karim Aguilera",
  "Jhonatan Vergara",
  "Rubén Avalos",
  "Osama Bin Laden",
  "Charlie Kirk",
];
const Complexities = ["Alta", "Media", "Baja"];
const Priorities = ["Alta", "Media", "Baja"];
const PastProjects = [
  "Ninguna",
  "Proyecto movil",
  "Sistema Ads",
  "Actinver 1",
  "Actinver 1.1",
  "Actinver 1.2",
];

function ProjectCreationModal({ onClose }: ProjectCreationModalProps) {
  const [adsLevel, setAdsLevel] = useState("Selecciona un nivel de ADS");
  const [architect, setArchitect] = useState("Selecciona un Arquitecto");
  const [complexity, setComplexity] = useState("Seleccione la complejidad");
  const [priority, setPriority] = useState("Seleccione la prioridad");
  const [pastProject, setPastProject] = useState("Seleccione la prioridad");

  //pastProject es EL PROYECTO ANTERIOR al que está relacionado EL PROYECTO ACTUAL*/

  const onAdsLevel = (option: string) => {
    setAdsLevel(option);
  };
  const onArchitect = (architect: string) => {
    setArchitect(architect);
  };
  const onComplexity = (complexity: string) => {
    setComplexity(complexity);
  };
  const onPriority = (priority: string) => {
    setPriority(priority);
  };
  const onPastProject = (pastProject: string) => {
    setPastProject(pastProject);
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
        <div className="bg-muted h-full w-full rounded-2xl p-4 flex flex-col gap-4 ">
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Nivel de Ads</h4>

            {/*A dropdown pasamos como prop la función onAdsLevel, unicamente para 
          Propdrilling,para que vaya hacia DropdownItem*/}
            <Dropdown
              selected={adsLevel}
              options={Options}
              onAdsLevel={onAdsLevel}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Arquitecto</h4>
            <Dropdown
              selected={architect}
              options={Architects}
              onAdsLevel={onArchitect}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Complejidad del Proyecto</h4>
            <Dropdown
              selected={complexity}
              options={Complexities}
              onAdsLevel={onComplexity}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Prioridad del Proyecto</h4>
            <Dropdown
              selected={priority}
              options={Priorities}
              onAdsLevel={onPriority}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Relación a un proyecto anterior</h4>
            <Dropdown
              selected={pastProject}
              options={PastProjects}
              onAdsLevel={onPastProject}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCreationModal;
