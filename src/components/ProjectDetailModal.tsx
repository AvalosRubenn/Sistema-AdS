import { MoveLeft } from "lucide-react";

interface ProjectDetailModalProps {
  onClose: () => void;
}

function ProjectDetailModal({ onClose }: ProjectDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <button
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={onClose}
          >
            <MoveLeft size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
