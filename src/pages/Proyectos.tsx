import ProjectCard from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";

function Proyectos() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <h1 className="text-4xl font-bold pb-6">Proyectos</h1>
      <SearchBar />
      <div className="grid grid-cols-3 gap-8 items-center">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Proyectos;
