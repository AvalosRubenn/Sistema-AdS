import type { PendingProjectProps } from "./PendingProject";
import { MoveLeft, FileText } from "lucide-react";
import { createPortal } from "react-dom";

interface PendingProjectModalProps {
  pendingProject: PendingProjectProps;
  onClose: () => void;
}
function PendingProjectModal({
  pendingProject,
  onClose,
}: PendingProjectModalProps) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center bg-black/50 justify-center">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
          >
            <MoveLeft size={18} />
          </button>

          <h2 className="text-2xl font-semibold text-zies-azul-1">
            {pendingProject.titulo}
          </h2>
        </div>

        <div className="flex items-center gap-8 text-sm mt-3 text-muted-foreground">
          <div className="flex items-center gap-2">
            <FileText size={14} />
            <span>ZIES-{pendingProject.codigo}</span>
          </div>

          <span>Fecha: {pendingProject.fecha}</span>
        </div>

        <div className="border-t mt-6 pt-4">
          <h3 className="text-2xl text-zies-azul-1 mb-3">Descripción</h3>

          <p className="text-muted-foreground leading-relaxed">
            {pendingProject.descripcion}
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default PendingProjectModal;
