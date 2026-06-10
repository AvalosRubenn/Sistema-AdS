import { MoveLeft } from "lucide-react";

interface AddArchitectModalProps {
  onClose: () => void;
}
function AddArchitectModal({ onClose }: AddArchitectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background rounded-xl w-full max-w-4xl shadow-sm p-6">
        <button>
          <MoveLeft size={18} onClick={onClose} />
        </button>
        <h3 className="text-2xl">Añadir arquitecto</h3>
      </div>
    </div>
  );
}

export default AddArchitectModal;
