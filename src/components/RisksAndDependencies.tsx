import RiskCard from "./RiskCard";
import { type RiskCardProps } from "./RiskCard";

interface RisksAndDependenciesProps {
  nombre: string;
  nivelBajo: number;
  nivelMedio: number;
  nivelAlto: number;
  riesgosYDependencias: RiskCardProps[];
}
function RisksAndDependencies({
  nombre,
  nivelAlto,
  nivelMedio,
  nivelBajo,
  riesgosYDependencias,
}: RisksAndDependenciesProps) {
  return (
    <div className="bg-background rounded-xl shadow-sm w-full">
      <div className="border-b border-border px-6 py-5">
        <h2 className="text-xl ml-4">{nombre}</h2>
        <div className="flex items-center gap-2 ml-4">
          <div className="w-2 h-2 bg-success rounded-full" />
          <p>Bajo: {nivelBajo}</p>
          <div className="w-2 h-2 bg-warning rounded-full" />
          <p>Medio: {nivelMedio}</p>
          <div className="w-2 h-2 bg-error rounded-full" />
          <p>Alto: {nivelAlto}</p>
        </div>
      </div>
      {riesgosYDependencias.map((r) => (
        <RiskCard
          titulo={r.titulo}
          nivel={r.nivel}
          activo={r.activo}
          descripcion={r.descripcion}
          responsable={r.responsable}
          fecha={r.fecha}
        />
      ))}
    </div>
  );
}

export default RisksAndDependencies;
