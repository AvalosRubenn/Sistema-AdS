import { useState } from "react";
import { Clock3, Search, User, FolderKanban, X, Check } from "lucide-react";

interface Tarea {
  titulo: string;
  proyecto: string;
  arquitecto: string;
  fecha: string;
  version: string;
  entrega: string;
  sharepoint: string;
  comentariosArquitecto: string;
}

const tareas: Tarea[] = [
  {
    titulo: "Sistema Ads",
    proyecto: "Celula 1",
    arquitecto: "Rubén Avalos",
    fecha: "25 May, 15:00",
    version: "v1.2",
    entrega: "Entrega de Revisión de tareas",
    sharepoint:
      "https://zies.sharepoint.com/sites/ActinverArquitecturaF2/Documentos%20compar",
    comentariosArquitecto: "Se agregó la sección de Revisión de Tareas.",
  },
  {
    titulo: "ISistema de cobro contactless",
    proyecto: "Actinver 2.0",
    arquitecto: "Ana Banana",
    fecha: "20 May, 12:00",
    version: "v1.5",
    entrega: "Documento de Investigación",
    sharepoint: "https://sharepoint.com/hola",
    comentariosArquitecto: "Arquitectura mejorada",
  },
  {
    titulo: "ISistema de cobro contactless",
    proyecto: "Actinver 2.0",
    arquitecto: "Ana Banana",
    fecha: "20 May, 12:00",
    version: "v1.5",
    entrega: "Documento de Investigación",
    sharepoint: "https://sharepoint.com/hola",
    comentariosArquitecto: "Arquitectura mejorada",
  },
  {
    titulo: "ISistema de cobro contactless",
    proyecto: "Actinver 2.0",
    arquitecto: "Ana Banana",
    fecha: "20 May, 12:00",
    version: "v1.5",
    entrega: "Documento de Investigación",
    sharepoint: "https://sharepoint.com/hola",
    comentariosArquitecto: "Arquitectura mejorada",
  },
  {
    titulo: "ISistema de cobro contactless",
    proyecto: "Actinver 2.0",
    arquitecto: "Ana Banana",
    fecha: "20 May, 12:00",
    version: "v1.5",
    entrega: "Documento de Investigación",
    sharepoint: "https://sharepoint.com/hola",
    comentariosArquitecto: "Arquitectura mejorada",
  },
];

function Tareas() {
  const [selectedTask, setSelectedTask] = useState<Tarea | null>(null);

  const [isRejecting, setIsRejecting] = useState(false);

  const [rejectComment, setRejectComment] = useState("");

  function closeModal() {
    setSelectedTask(null);
    setIsRejecting(false);
    setRejectComment("");
  }

  function handleAccept() {
    alert(`La tarea "${selectedTask?.titulo}" fue aceptada correctamente.`);

    closeModal();
  }

  function handleReject() {
    if (!isRejecting) {
      setIsRejecting(true);
      return;
    }

    alert(
      `La tarea "${selectedTask?.titulo}" fue rechazada.\n\nComentario:\n${rejectComment}`,
    );

    closeModal();
  }

  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-zies-azul-1">
          Revisión de tareas
        </h1>
      </div>

      <div className="relative mb-6">
        <Search
          size={18}
          className="
            absolute left-4 top-1/2
            -translate-y-1/2
            text-muted-foreground
          "
        />

        <input
          type="text"
          placeholder="Buscar por nombre de proyecto, arquitecto o tarea..."
          className="
            h-11 w-full rounded-xl
            border border-border
            bg-background
            pl-11 pr-4
            text-sm
            outline-none
          "
        />
      </div>

      {/* TASKS */}
      <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
        {tareas.map((tarea, index) => (
          <button
            key={tarea.titulo}
            onClick={() => setSelectedTask(tarea)}
            className={`
              flex w-full items-center justify-between
              px-6 py-5 text-left
              transition-colors
              hover:bg-muted/30
              ${index !== tareas.length - 1 ? "border-b border-border" : ""}
            `}
          >
            <div>
              <h3 className="text-lg font-semibold text-zies-azul-1">
                {tarea.titulo}
              </h3>

              <div className="mt-3 flex items-center gap-10 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FolderKanban size={14} />

                  <span>{tarea.proyecto}</span>
                </div>

                <div className="flex items-center gap-2">
                  <User size={14} />

                  <span>{tarea.arquitecto}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={14} />

                  <span>{tarea.fecha}</span>
                </div>
              </div>
            </div>

            <div
              className="
                rounded-full
                bg-blue-100
                px-3 py-1
                text-xs font-semibold
                text-blue-700
              "
            >
              {tarea.version}
            </div>
          </button>
        ))}
      </div>

      {selectedTask && (
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40 p-4
          "
        >
          <div
            className="
              w-full max-w-2xl
              rounded-2xl
              bg-background
              shadow-2xl
            "
          >
            {/* HEADER */}
            <div
              className="
                flex items-start justify-between
                border-b border-border
                px-6 py-5
              "
            >
              <div>
                <h2 className="text-2xl font-bold text-zies-azul-1">
                  {selectedTask.titulo}
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  Visualización de tarea
                </p>
              </div>

              <button
                onClick={closeModal}
                className="
                  rounded-lg p-2
                  transition-colors
                  hover:bg-muted
                "
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-5 px-6 py-6">
              <div>
                <p className="text-xs text-muted-foreground">Arquitecto</p>

                <p className="mt-1 font-medium">{selectedTask.arquitecto}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Nombre de la entrega
                </p>

                <p className="mt-1 font-medium">{selectedTask.entrega}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Hora de entrega</p>

                <p className="mt-1 font-medium">{selectedTask.fecha}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Link de Sharepoint
                </p>

                <a
                  href={selectedTask.sharepoint}
                  target="_blank"
                  className="
                    mt-1 block
                    text-sm text-blue-600 underline
                  "
                >
                  {selectedTask.sharepoint}
                </a>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Versión de la tarea
                </p>

                <p className="mt-1 font-medium">{selectedTask.version}</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Comentarios del arquitecto
                </p>

                <div
                  className="
                    mt-2 rounded-xl
                    bg-muted p-4
                    text-sm
                  "
                >
                  {selectedTask.comentariosArquitecto}
                </div>
              </div>

              {/* REJECT FLOW */}
              {isRejecting && (
                <div>
                  <p className="mb-2 text-xs text-muted-foreground">
                    Comentarios de rechazo
                  </p>

                  <textarea
                    value={rejectComment}
                    onChange={(e) => setRejectComment(e.target.value)}
                    placeholder="Escribe los comentarios para el arquitecto..."
                    className="
                      min-h-[120px] w-full
                      rounded-xl
                      border border-border
                      bg-background
                      p-4 text-sm
                      outline-none
                    "
                  />
                </div>
              )}
            </div>

            <div
              className="
                flex items-center justify-end gap-3
                border-t border-border
                px-6 py-5
              "
            >
              <button
                onClick={handleReject}
                className="
                  rounded-xl
                  border border-red-200
                  px-5 py-2.5
                  text-sm font-medium
                  text-red-600
                  transition-colors
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
                  text-sm font-medium text-white
                  transition-opacity
                  hover:opacity-90
                "
              >
                <Check size={16} />

                <span>Aceptar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tareas;
