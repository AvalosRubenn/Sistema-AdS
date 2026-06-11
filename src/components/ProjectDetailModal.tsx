import { MoveLeft } from "lucide-react";

interface ProjectDetailModalProps {
  onClose: () => void;
}

function ProjectDetailModal({ onClose }: ProjectDetailModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-background w-full max-w-4xl rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={onClose}
          >
            <MoveLeft size={18} />
          </button>

          <h3>Detalle del proyecto</h3>
        </div>

        <div className="border border-border rounded-xl p-6">
          <div className="mb-6">
            <h2 className="text-zies-azul-2">Migración a AWS Actinver 2.0</h2>
            <p className="text-muted-foreground mt-1">
              R1: Arquitectura básica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Nombre del proyecto
              </p>
              <p className="font-semibold">Migración a AWS Actinver 2.0</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Célula</p>
              <p className="font-semibold">Actinver 2.0</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Prioridad</p>
              <p className="font-semibold text-zies-rojo">Muy alta</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Porcentaje de tareas terminadas
              </p>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: "67%" }}
                  />
                </div>

                <span className="font-semibold">67%</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Fecha de entrega</p>
              <p className="font-semibold">3 de jul 2026</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Estatus gobierno</p>

              <span className="inline-flex items-center rounded-full bg-info/10 text-info px-3 py-1 text-sm">
                En seguimiento
              </span>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Fecha de asignación
              </p>
              <p className="font-semibold">1 de jun 2026</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Semáforo de salud</p>

              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="font-semibold">Saludable</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Arquitecto asignado
              </p>
              <p className="font-semibold">Rubén Avalos</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">
                Nivel de madurez / complejidad
              </p>

              <span className="inline-flex items-center rounded-full bg-error/10 text-error px-3 py-1 text-sm">
                Alta
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailModal;
