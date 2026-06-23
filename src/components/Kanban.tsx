function Kanban() {
  return (
    <div className="flex gap-6 w-full p-6 ">
      <div className="w-[25%] bg-background border border-border shadow-sm rounded-xl p-2">
        <div className="flex flex-col">
          <div className="flex flex-col border-b border-b-border pl-4 justify-center">
            <p className="font-bold text-xl">Por Hacer</p>
            <p>3 tareas</p>
          </div>
          <div className=" flex flex-col px-2 justify-center mt-4 gap-4">
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
    </div>
  );
}

export default Kanban;
