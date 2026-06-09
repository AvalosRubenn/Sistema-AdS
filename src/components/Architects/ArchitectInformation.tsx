import type { Architect } from "../../types/Architect";
import { User } from "lucide-react";

//Este componente está dedicado a mostrar la foto del arquitecto junto con el nombre y su puesto.
interface ArchitectInformationProps {
  arquitecto: Architect;
}
function ArchitectInformation({ arquitecto }: ArchitectInformationProps) {
  return (
    <div className="w-2xs h-fit bg-background rounded-2xl p-8 mt-4 shadow-sm flex flex-col gap-3 items-center justify-center">
      <div className="w-52 h-52 rounded-2xl overflow-hidden">
        {arquitecto.img ? (
          <img
            src={arquitecto.img}
            alt={arquitecto.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-zies-azul-2 text-background flex items-center justify-center">
            <User size={120} />
          </div>
        )}
      </div>

      <h2 className="text-2xl font-semibold mr-auto">{arquitecto.name}</h2>
      <p className="mr-auto">{arquitecto.position}</p>
    </div>
  );
}

export default ArchitectInformation;
