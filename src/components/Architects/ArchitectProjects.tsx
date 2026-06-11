function ArchitectProjects() {
  return (
    <div className="w-full bg-background border border-border shadow-sm rounded-2xl">
      <div className="px-6 py-5 flex flex-col gap-4">
        <div className="mt-4">
          <h2 className="text-xl mr-auto">Proyectos</h2>
        </div>
        <div className="flex flex-col">
          <div>
            <div className="flex items-center">
              <div className="w-1/2  flex flex-col border-b border-b-border">
                <p className="font-bold ml-2">Nombre del proyecto</p>
              </div>
              <div className="w-1/2 flex flex-col border-b border-b-border">
                <p className="font-bold ml-2">Fase del proyecto</p>
              </div>
            </div>
            <button className="w-full flex items-center border-b border-border py-2 hover:bg-muted transition-colors">
              <div className="w-1/2 text-left">
                <p className=" ml-2">Migración a AWS Actinver 2.0</p>
              </div>
              <div className="w-1/2 text-left">
                <p className=" ml-2">R1: Arquitectura básica</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectProjects;
