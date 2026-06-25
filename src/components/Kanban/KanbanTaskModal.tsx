import { useState } from "react";
import { Check, X, Link2 } from "lucide-react";
import type { KanbanCardProps } from "./KanbanCard";

interface KanbanTaskModalProps {
  tarea: KanbanCardProps;
  onClose: () => void;
  onSaveLink: (cardId: string, sharepointLink: string) => void;
}

function KanbanTaskModal({ tarea, onClose, onSaveLink }: KanbanTaskModalProps) {
  const [sharepointLink, setSharepointLink] = useState("");
  const [error, setError] = useState("");

  function handleConfirm() {
    if (!sharepointLink.trim()) {
      setError("El enlace de SharePoint es obligatorio.");
      return;
    }
    if (
      !sharepointLink.startsWith("http://") &&
      !sharepointLink.startsWith("https://")
    ) {
      setError("Por favor, introduce una URL válida (ej. https://...)");
      return;
    }

    onSaveLink(tarea.id, sharepointLink);
    alert(`Enlace guardado para la tarea "${tarea.name}"`);
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
      <div className="w-full max-w-xl rounded-2xl bg-background shadow-2xl border border-border">
        <div className="flex items-start justify-between border-b border-border px-6 py-5">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{tarea.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {tarea.project} • {tarea.date}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-muted text-muted-foreground transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5 px-6 py-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Enlace de SharePoint de la tarea
            </label>

            <div className="relative rounded-xl shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-muted-foreground">
                <Link2 size={18} />
              </div>
              <input
                type="url"
                placeholder="https://tu-organizacion.sharepoint.com/..."
                value={sharepointLink}
                onChange={(e) => {
                  setSharepointLink(e.target.value);
                  if (error) setError("");
                }}
                className={`
                  w-full
                  rounded-xl
                  border ${error ? "border-error" : "border-border"}
                  bg-background
                  py-3 pl-11 pr-4
                  text-sm
                  outline-none
                  focus:border-primary focus:ring-1 focus:ring-primary
                  transition-all
                `}
              />
            </div>

            {error && (
              <p className="mt-2 text-xs text-error font-medium">{error}</p>
            )}
          </div>

          <div className="rounded-xl bg-muted p-4 text-xs text-muted-foreground">
            Asegúrate de que los permisos del enlace en SharePoint permitan el
            acceso a los miembros revisores de tu equipo.
          </div>
        </div>

        <div className="flex justify-end gap-3 border-t border-border px-6 py-5">
          <button
            onClick={onClose}
            className="
              rounded-xl
              border border-border
              px-5 py-2.5
              text-sm font-medium
              hover:bg-muted
              transition-colors
            "
          >
            Cancelar
          </button>

          <button
            onClick={handleConfirm}
            className="
              flex items-center gap-2
              rounded-xl
              bg-primary
              px-5 py-2.5
              text-sm font-semibold text-primary-foreground
              hover:opacity-90
              transition-opacity
            "
          >
            <Check size={16} />
            <span>Guardar Enlace</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default KanbanTaskModal;
