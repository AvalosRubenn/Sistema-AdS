interface ProjectSelectionProps {
  projects: string[];
}

function ProjectSelection({ projects }: ProjectSelectionProps) {
  //Componente para la sección de Entrega de Tareas
  return (
    <div className="rounded-2xl shadow-sm bg-background">
      <div className="px-6 py-5 flex justify-center flex-col">
        <div className="flex items-center w-full">
          <h2 className="text-xl font-semibold">Filtrar por proyecto</h2>
        </div>
        <div className="mt-4 flex items-center overflow-x-auto max-h-full gap-2 scrollbar-thin pb-2">
          <button className="bg-zies-azul-2 rounded-lg text-background p-2 px-3 w-fit h-fit whitespace-nowrap">
            Todos
          </button>
          {projects.map((p) => (
            <button className="bg-zies-azul-2 rounded-lg text-background p-2 px-3 w-fit h-fit whitespace-nowrap">
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSelection;
