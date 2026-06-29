import { Link } from "react-router-dom";
import ProjectCard, {
  type ProjectCardProps,
} from "../components/Projects/ProjectCard";
import SearchBar from "../components/SearchBar";

const Projects: ProjectCardProps[] = [
  {
    Title: "Sistema ADS",
    Code: 1506,
    Celula: "Sistema ADS",
    ProgressPercentage: 67,
    priority: "MEDIA",
    ArchitectName: "Ruben Avalos",
    Deadline: "30/06",
  },
  {
    Title: "Frontend sistema ADS",
    Code: 1507,
    Celula: "Sistema ADS",
    ProgressPercentage: 90,
    priority: "ALTA",
    ArchitectName: "Ruben Avalos",
    Deadline: "30/06",
  },
  {
    Title: "Backend sistema ADS",
    Code: 1508,
    Celula: "Sistema ADS",
    ProgressPercentage: 1,
    priority: "BAJA",
    ArchitectName: "Ruben Avalos",
    Deadline: "15/08",
  },
  {
    Title: "Rugpull Solana",
    Code: 1509,
    Celula: "Crypto Exchange",
    ProgressPercentage: 52,
    priority: "MEDIA",
    ArchitectName: "Ruben Avalos",
    Deadline: "20/07",
  },
];

function Proyectos() {
  return (
    <div className="min-h-screen w-full bg-muted p-8">
      <h1 className="text-4xl font-bold pb-6">Proyectos</h1>
      <SearchBar />
      <div className="grid grid-cols-3 gap-8 items-center">
        {Projects.map((p) => (
          <Link
            key={p.Code}
            to={`/proyectos/${p.Code}`}
            state={{ project: p }}
            className="hover:scale-[1.01] transition-transform duration-200"
          >
            <ProjectCard
              Title={p.Title}
              Code={p.Code}
              Celula={p.Celula}
              ProgressPercentage={p.ProgressPercentage}
              priority={p.priority}
              ArchitectName={p.ArchitectName}
              Deadline={p.Deadline}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Proyectos;
