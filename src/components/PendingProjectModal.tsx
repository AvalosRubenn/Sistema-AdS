import type { PendingProjectProps } from "./PendingProject";
import { MoveLeft, FileText, CircleCheckBig, X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";

interface PendingProjectModalProps {
  pendingProject: PendingProjectProps;
  onClose: () => void;
  onAccept: () => void;
  onRejected: () => void;
}
function PendingProjectModal({
  pendingProject,
  onClose,
  onAccept,
  onRejected,
}: PendingProjectModalProps) {
  const [isRejecting, setIsRejecting] = useState(false);
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const CloseAndAccept = () => {
    onClose();
    onAccept();
  };
  const RejectProject = () => {
    console.log(text);
    onRejected();
    //Aquí se hara el cambió para el POST cuando el back exista
  };
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
        <div className="mt-6 pt-4 flex items-center gap-4">
          <button
            className="p-3 bg-success text-background rounded-xl flex gap-2 items-center hover:opacity-90"
            onClick={CloseAndAccept}
          >
            <CircleCheckBig size={20} />
            Aceptar
          </button>
          <button
            className="p-3 bg-error text-background border border-error rounded-xl flex gap-2 items-center  hover:opacity-90"
            onClick={() => setIsRejecting(true)}
          >
            <X size={20} />
            Rechazar
          </button>
        </div>
        {isRejecting && (
          <div className="mt-6  items-center">
            <textarea
              value={text}
              onChange={handleChange}
              placeholder="Escriba el motivo del rechazo..."
              maxLength={520}
              className="w-full h-48 p-4 border rounded-2xl resize-none mb-2"
            />
            <button
              className="p-3 px-5 bg-background text-error border border-error rounded-xl flex gap-2 items-center  hover:opacity-90"
              onClick={RejectProject}
            >
              Rechazar
            </button>
            <div className="text-sm text-muted-foreground text-right mt-1">
              {text.length}/520
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default PendingProjectModal;
