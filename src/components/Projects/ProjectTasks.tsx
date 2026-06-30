import ProjectTask from "./ProjectTask";

function ProjectTasks() {
  return (
    <div className="w-2/3 bg-background border border-border shadow-sm rounded-2xl flex flex-col">
      <p className="text-2xl font-semibold py-3 pl-6 w-full border-b border-border">
        Tareas
      </p>
      <div className="flex flex-col">
        <ProjectTask />
        <ProjectTask />
        <ProjectTask />
      </div>
    </div>
  );
}

export default ProjectTasks;
