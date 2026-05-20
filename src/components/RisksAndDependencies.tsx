import RiskCard from "./RiskCard";

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
      <RiskCard
        titulo="Riesgos y Dependencias Hardcodeados"
        nivel="MEDIO"
        activo={false}
        descripcion="El componente no está preparado para recibir información"
        responsable="Rubén Avalos"
        fecha="19 May"
      />
    </div>
  );
}

export default RisksAndDependencies;
