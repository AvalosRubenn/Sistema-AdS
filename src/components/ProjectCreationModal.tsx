import { MoveLeft } from "lucide-react";
interface ProjectCreationModalProps {
  onClose: () => void;
}
function ProjectCreationModal({ onClose }: ProjectCreationModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6 ">
        <button onClick={onClose}>
          <MoveLeft size={18} />
        </button>
        <p>Aquí se mostrarán las opciones para la creación de un proyecto...</p>
      </div>
    </div>
  );
}

export default ProjectCreationModal;
