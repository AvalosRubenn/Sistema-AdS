import type { ChartItem } from "../components/HorizontalBarChart";
export type Architect = {
  id: number;
  name: string;
  lastName: string;
  mail: string;
  permissions: string;
  celula: string;
  img?: string;
  position: string;
  positionDescription: string;
  performancePercentage: number;
  projects: number;
  projectsCanceled: number;
  projectsActive: number;
  projectsClosed: number;
  statusData: ChartItem[];
  complexityData: ChartItem[];
};

//puesto o cargo de trabajo es referido como position en el tipado.
