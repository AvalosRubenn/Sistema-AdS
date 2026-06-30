import ProjectTask from "./ProjectTask";
import type { ProjectTaskProps } from "./ProjectTask";

const Tasks: ProjectTaskProps[] = [
  {
    level: "R1",
    name: "Detalle de Proyectos",
    dueDate: "30 jun, 2026",
    state: "Aceptada",
    link: " https://sharepoint.com/link-de-ejemplo",
  },
  {
    level: "R3",
    name: "Expansión solana memecoin",
    dueDate: "08 ago, 2026",
    state: "Aceptada",
    link: " https://sharepoint.com/link-de-ejemplo",
  },
];

function ProjectTasks() {
  return (
    <div className="w-2/3 bg-background border border-border shadow-sm rounded-2xl flex flex-col">
      <p className="text-2xl font-semibold py-3 pl-6 w-full border-b border-border">
        Tareas
      </p>
      <div className="flex flex-col">
        {Tasks.map((t) => (
          <ProjectTask
            level={t.level}
            name={t.name}
            dueDate={t.dueDate}
            state={t.state}
            link={t.link}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectTasks;
