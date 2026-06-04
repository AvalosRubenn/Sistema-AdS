import { useState } from "react";
import { Check, X } from "lucide-react";
import type { Tarea } from "./Task";

interface TaskModalProps {
  tarea: Tarea;
  onClose: () => void;
}

function TaskModal({ tarea, onClose }: TaskModalProps) {
  const [isRejecting, setIsRejecting] = useState(false);
  const [rejectComment, setRejectComment] = useState("");

  function handleAccept() {
    alert(`La tarea "${tarea.titulo}" fue aceptada.`);
    onClose();
  }

  function handleReject() {
    if (!isRejecting) {
      setIsRejecting(true);
      return;
    }

    alert(`La tarea "${tarea.titulo}" fue rechazada.\n\n${rejectComment}`);

    onClose();
  }

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/40 p-4
      "
    >
      <div className="w-full max-w-2xl rounded-2xl bg-background shadow-2xl">
        <div className="flex items-start justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-zies-azul-1">
              {tarea.titulo}
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Visualización de tarea
            </p>
          </div>

          <button onClick={onClose} className="rounded-lg p-2 hover:bg-muted">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <Info label="Arquitecto" value={tarea.arquitecto} />
          <Info label="Nombre de la entrega" value={tarea.entrega} />
          <Info label="Hora de entrega" value={tarea.fecha} />
          <Info label="Versión de la tarea" value={tarea.version} />

          <div>
            <p className="text-xs text-muted-foreground">Link de SharePoint</p>

            <a
              href={tarea.sharepoint}
              target="_blank"
              rel="noreferrer"
              className="mt-1 block text-sm text-blue-600 underline"
            >
              Abrir documento
            </a>
          </div>

          <div>
            <p className="text-xs text-muted-foreground">
              Comentarios del arquitecto
            </p>

            <div className="mt-2 rounded-xl bg-muted p-4 text-sm">
              {tarea.comentariosArquitecto}
            </div>
          </div>

          {isRejecting && (
            <div>
              <p className="mb-2 text-xs text-muted-foreground">
                Comentarios de rechazo
              </p>

              <textarea
                value={rejectComment}
                onChange={(e) => setRejectComment(e.target.value)}
                className="
                  min-h-[120px]
                  w-full
                  rounded-xl
                  border border-border
                  p-4
                "
              />
            </div>
          )}
        </div>

        <div className="flex justify-end gap-3 border-t border-border px-6 py-5">
          <button
            onClick={handleReject}
            className="
              rounded-xl
              border border-red-200
              px-5 py-2.5
              text-red-600
              hover:bg-red-50
            "
          >
            {isRejecting ? "Confirmar rechazo" : "Rechazar"}
          </button>

          <button
            onClick={handleAccept}
            className="
              flex items-center gap-2
              rounded-xl
              bg-zies-azul-2
              px-5 py-2.5
              text-white
            "
          >
            <Check size={16} />
            <span>Aceptar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

interface InfoProps {
  label: string;
  value: string;
}

function Info({ label, value }: InfoProps) {
  return (
    <div>
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}

export default TaskModal;
