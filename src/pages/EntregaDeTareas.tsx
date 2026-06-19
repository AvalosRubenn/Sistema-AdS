import ProjectSelection from "../components/Projects/ProjectSelection";

const Projects: string[] = [
  "Cuentas remuneradas",
  "Papu cryptos",
  "Actinver 3.0",
];

function EntregaDeTareas() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <div className="mb-8 items-start">
        <h1 className="text-4xl font-bold ">Entrega de Tareas</h1>
      </div>
      <ProjectSelection projects={Projects} />
    </div>
  );
}

export default EntregaDeTareas;
