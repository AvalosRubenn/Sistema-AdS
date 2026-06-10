import { useState } from "react";
import type { Architect } from "../../types/Architect";
import Dropdown from "../Dropdown/Dropdown";

interface ArchitectSettingsProps {
  onClose: () => void;
  architect: Architect;
  Celulas: string[];
  Permisos: string[];
}
function ArchitectSettings({
  onClose,
  architect,
  Celulas,
  Permisos,
}: ArchitectSettingsProps) {
  const [name, setName] = useState(architect.name);
  const [lastName, setLastName] = useState(architect.lastName);
  const [mail, setMail] = useState(architect.mail);
  const [permissions, setPermissions] = useState(architect.permissions);
  const [celula, setCelula] = useState(architect.celula);
  const [position, setPosition] = useState(architect.position);

  const onCelulaChange = (option: string) => {
    setCelula(option);
  };
  const onPermissionsChange = (option: string) => {
    setPermissions(option);
  };
  const onAccept = () => {
    console.log(name, lastName, mail, permissions, celula, position);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6 ">
        <div className="mb-6">
          <h3 className="text-2xl">Configuración</h3>
        </div>
        <div className="bg-muted h-full w-full rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Nombre</h4>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Apellido</h4>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Correo</h4>
            <input
              type="text"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Célula</h4>
            <Dropdown
              selected={celula}
              options={Celulas}
              onAdsLevel={onCelulaChange}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Permisos</h4>
            <Dropdown
              selected={permissions}
              options={Permisos}
              onAdsLevel={onPermissionsChange}
            />
          </div>
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Puesto</h4>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="border rounded-xl p-3 bg-background"
            />
          </div>
        </div>
        <div className="flex gap-4 items-center mt-4">
          <button
            className="p-3 rounded-2xl text-background bg-success px-5 flex text-lg hover:opacity-80
          "
            onClick={onAccept}
          >
            {/*Es necesario cambiar lo que hace el onClick cuando tenga el back, debería de hacer
            un POST.*/}
            Aceptar
          </button>
          <button
            className="p-3 px-5 rounded-2xl text-muted-foreground border text-lg hover:text-error hover:border-error"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArchitectSettings;
