import { MoveLeft } from "lucide-react";
interface ArchitectSettingsProps {
  onClose: () => void;
}
function ArchitectSettings({ onClose }: ArchitectSettingsProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6 flex items-center justify-center">
        <button>
          <MoveLeft size={18} onClick={onClose} />
        </button>
        <div className="mb-6">
          <h3 className="text-2xl">Configuración</h3>
        </div>
        <div className="bg-muted h-full w-full rounded-2xl p-4 flex flex-col gap-4">
          <div className="h-full w-full my-4 flex gap-4 items-center">
            <h4>Nombre</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectSettings;
