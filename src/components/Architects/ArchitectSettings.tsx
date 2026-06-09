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
        <div className="flex items-center gap-3 mb-6 ">To do...</div>
      </div>
    </div>
  );
}

export default ArchitectSettings;
