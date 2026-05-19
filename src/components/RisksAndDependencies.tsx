interface RisksAndDependenciesProps {
  nombre: string;
}
function RisksAndDependencies({ nombre }: RisksAndDependenciesProps) {
  return (
    <div className="bg-background rounded-xl shadow-sm w-full">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-xl ml-4">{nombre}</h2>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-2 h-2 bg-success rounded-full" />
          <p>Bajo: 1</p>
          <div className="w-2 h-2 bg-warning rounded-full" />
          <p>Medio: 1</p>
          <div className="w-2 h-2 bg-error rounded-full" />
          <p>Alto: 2</p>
        </div>
      </div>
      <div className="mt-6 pb-4 mb-4 mx-6 border border-border bg-muted rounded-xl flex flex-col">
        <div className="flex items-center justify-between mt-2 mx-6">
          <p className="text-xl">Riesgos y Dependencias Hardcodeados</p>
          <p className="text-error px-2 py-1 text-xs rounded-lg bg-red-100">
            ALTO
          </p>
        </div>
        <p className="mt-2 mx-6 text-muted-foreground">
          El componente no está preparado para recibir información
        </p>
        <div className="flex items-center justify-between mt-2 mx-6">
          <p className="mt-2  text-muted-foreground">Rubén Avalos · 18 May</p>
          <p className="text-error px-2 py-1 text-xs rounded-lg bg-red-100">
            Activo
          </p>
        </div>
      </div>
      <div className="mt-6 pb-4 mb-4 mx-6 border border-border bg-muted rounded-xl flex flex-col">
        <div className="flex items-center justify-between mt-2 mx-6">
          <p className="text-xl">Riesgos y Dependencias Hardcodeados</p>
          <p className="text-error px-2 py-1 text-xs rounded-lg bg-red-100">
            ALTO
          </p>
        </div>
        <p className="mt-2 mx-6 text-muted-foreground">
          El componente no está preparado para recibir información
        </p>
        <div className="flex items-center justify-between mt-2 mx-6">
          <p className="mt-2  text-muted-foreground">Rubén Avalos · 18 May</p>
          <p className="text-error px-2 py-1 text-xs rounded-lg bg-red-100">
            Activo
          </p>
        </div>
      </div>
    </div>
  );
}

export default RisksAndDependencies;
