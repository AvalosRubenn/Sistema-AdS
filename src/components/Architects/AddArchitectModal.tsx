import { MoveLeft } from "lucide-react";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

interface AddArchitectModalProps {
  onClose: () => void;
  Celulas: string[];
  Permisos: string[];
}
function AddArchitectModal({
  onClose,
  Celulas,
  Permisos,
}: AddArchitectModalProps) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [permissions, setPermissions] = useState("Selecciona un permiso");
  const [celula, setCelula] = useState("Selecciona una célula");
  const [position, setPosition] = useState("");
  const [completeData, setCompleteData] = useState(true);
  const onCelulaChange = (option: string) => {
    setCelula(option);
  };
  const onPermissionsChange = (option: string) => {
    setPermissions(option);
  };

  const ValidateArchitect = () => {
    const isValid =
      name !== "" &&
      lastName !== "" &&
      mail !== "" &&
      permissions !== "Selecciona un permiso" &&
      celula !== "Selecciona una célula" &&
      position !== "";
    setCompleteData(isValid);
    return isValid;
  };

  const AcceptArchitect = () => {
    const isValid = ValidateArchitect();
    if (!isValid) {
      return;
    }
    console.log(name, lastName, mail, permissions, celula, position);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background rounded-xl w-full max-w-4xl shadow-sm p-6">
        <button>
          <MoveLeft size={18} onClick={onClose} />
        </button>
        <h3 className="text-2xl mb-4">Añadir arquitecto</h3>
        <div className="bg-muted h-full w-full rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Nombre</h4>
            <input
              type="text"
              placeholder="Nombre..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Apellido</h4>
            <input
              type="text"
              placeholder="Apellido..."
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Correo</h4>
            <input
              type="text"
              placeholder="Correo..."
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Célula</h4>
            <Dropdown
              selected={celula}
              options={Celulas}
              onAdsLevel={onCelulaChange}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Permisos</h4>
            <Dropdown
              selected={permissions}
              options={Permisos}
              onAdsLevel={onPermissionsChange}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4 className="font-normal">Puesto</h4>
            <input
              type="text"
              placeholder="Puesto..."
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
        </div>
        {!completeData && (
          <div className="bg-background border border-error w-full rounded-xl mt-6 p-6 text-error flex items-center justify-center">
            <p>Es necesario llenar todos los datos</p>
          </div>
        )}
        <div className="flex gap-4 items-center mt-4">
          <button
            className="p-3 rounded-2xl text-background bg-success px-5 flex text-lg hover:opacity-80
          "
            onClick={AcceptArchitect}
          >
            {/*Es necesario cambiar lo que hace el onClick cuando tenga el back, debería de hacer
            un POST.*/}
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddArchitectModal;
