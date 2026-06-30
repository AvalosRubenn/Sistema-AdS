function ProjectTimeline() {
  return (
    <div className="w-1/3 bg-background shadow-sm rounded-2xl flex flex-col h-fit">
      <p className="text-2xl font-semibold py-3 pl-6 w-full border-b border-border">
        Timeline
      </p>
      <div className="flex flex-col my-4 gap-6">
        <div className="flex flex-col pl-6 border-b border-border pb-4 pt-2">
          <p className="text-lg">Fecha de inicio</p>
          <p className="text-lg text-zies-azul-2">30 jun, 2026</p>
        </div>
        <div className="flex flex-col pl-6 border-b border-border pb-5">
          <p className="text-lg">Fecha limite</p>
          <p className="text-lg text-zies-azul-2">30 de jul, 2026</p>
        </div>
        <div className="flex flex-col pl-6 pb-2">
          <p className="text-lg">Duración</p>
          <p className="text-lg text-zies-azul-2">16 días</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectTimeline;
