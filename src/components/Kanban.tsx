function Kanban() {
  return (
    <div className="flex gap-6 w-full p-6 ">
      <div className="w-[25%] h-[600px] bg-background border border-border shadow-sm rounded-xl p-2 flex flex-col">
        <div className="border-b border-border pl-4 ">
          <p className="font-bold text-xl">Por Hacer</p>
          <p>3 tareas</p>
        </div>
        <div className="flex-1 overflow-y-auto px-2 mt-4 flex flex-col gap-4 scrollbar-thin">
          <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
            <div className="flex items-center">
              <p className="font-bold mr-auto">R1 - Investigación Inicial</p>
              <div className="rounded-full bg-error w-4 h-4" />
            </div>
            <p className="text-sm">Migración AWS</p>
            <div className="flex items-center">
              <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold">
                ALTA
              </p>
              <p className="text-sm ml-auto">20 jun</p>
            </div>
          </div>
          <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
            <div className="flex items-center">
              <p className="font-bold mr-auto">R1 - Investigación Inicial</p>
              <div className="rounded-full bg-error w-4 h-4" />
            </div>
            <p className="text-sm">Migración AWS</p>
            <div className="flex items-center">
              <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold">
                ALTA
              </p>
              <p className="text-sm ml-auto">20 jun</p>
            </div>
          </div>
          <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
            <div className="flex items-center">
              <p className="font-bold mr-auto">R1 - Investigación Inicial</p>
              <div className="rounded-full bg-error w-4 h-4" />
            </div>
            <p className="text-sm">Migración AWS</p>
            <div className="flex items-center">
              <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold">
                ALTA
              </p>
              <p className="text-sm ml-auto">20 jun</p>
            </div>
          </div>
          <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
            <div className="flex items-center">
              <p className="font-bold mr-auto">R1 - Investigación Inicial</p>
              <div className="rounded-full bg-error w-4 h-4" />
            </div>
            <p className="text-sm">Migración AWS</p>
            <div className="flex items-center">
              <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold">
                ALTA
              </p>
              <p className="text-sm ml-auto">20 jun</p>
            </div>
          </div>
          <div className="bg-background border border-border flex flex-col w-full p-2 rounded-lg shadow-sm gap-4">
            <div className="flex items-center">
              <p className="font-bold mr-auto">R1 - Investigación Inicial</p>
              <div className="rounded-full bg-error w-4 h-4" />
            </div>
            <p className="text-sm">Migración AWS</p>
            <div className="flex items-center">
              <p className="text-white bg-error px-2 py-1 rounded-md text-xs font-semibold">
                ALTA
              </p>
              <p className="text-sm ml-auto">20 jun</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
