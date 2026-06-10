import { Settings, Plus } from "lucide-react";
import type { Architect } from "../../types/Architect";
interface ArchitectSelectionProps {
  arquitectos: Architect[];
  onClick: (architect: Architect) => void;
  onArchitectSettings: () => void;
  onAddArchitect: () => void;
}
function ArchitectSelection({
  arquitectos,
  onClick,
  onArchitectSettings,
  onAddArchitect,
}: ArchitectSelectionProps) {
  const onSelectArchitect = (architect: Architect) => {
    onClick(architect);
    console.log(architect);
    //Aquí debería ir el POST al back
  };
  return (
    <div className="rounded-2xl border border-border bg-background shadow-sm">
      <div className="px-6 py-5 flex justify-center flex-col">
        <div className="flex items-center w-full">
          <h2 className="text-xl font-semibold">Selecciona un arquitecto</h2>
          <div className="flex items-center gap-2 ml-auto">
            <button
              className="hover:bg-muted hover:rounded-full p-2"
              onClick={onArchitectSettings}
            >
              <Settings size={18} />
            </button>
            <button
              className="bg-zies-azul-2 rounded-lg flex gap-2 items-center text-background p-2 px-3"
              onClick={onAddArchitect}
            >
              <Plus size={18} />
              Agregar
            </button>
          </div>
        </div>
        <div className="mt-4 flex items-center overflow-x-auto max-h-full gap-2 scrollbar-thin pb-2">
          {arquitectos.map((a) => (
            <button
              className="bg-zies-azul-2 rounded-lg text-background p-2 px-3 w-fit h-fit whitespace-nowrap"
              onClick={() => onSelectArchitect(a)}
            >
              {a.name} {a.lastName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArchitectSelection;
