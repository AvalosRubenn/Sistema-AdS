import { useState } from "react";
import ArchitectSelection from "../components/Architects/ArchitectSelection";
import type { Architect } from "../types/Architect";
const Architects: Architect[] = [
  {
    id: 1,
    name: "Ruben Avalos",
  },
  {
    id: 2,
    name: "Alejandro Martinez",
  },
  {
    id: 3,
    name: "Jhonatan Vergara",
  },
  {
    id: 4,
    name: "Karim Aguilera",
  },
  {
    id: 5,
    name: "Jhon Doe",
  },
];

function Arquitectos() {
  const [arquitectoSeleccionado, setArquitectoSeleccionado] =
    useState<Architect | null>(null);
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 items-start">
        <h1 className="text-4xl font-bold">Arquitectos</h1>
      </div>
      <ArchitectSelection
        arquitectos={Architects}
        onClick={setArquitectoSeleccionado}
      />
    </div>
  );
}

export default Arquitectos;
