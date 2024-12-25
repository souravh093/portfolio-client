import { TTechnology } from "./technology.types";

export type TProject = {
  id: string;
  name: string;
  description: string;
  duration: string;
  projectUrl: string;
  projectCategory: string;
  githubClientUrl: string;
  githubServerUrl: string;
  image: string;
  projectUsedTechnology: TProjectUsedTechnology[];
};

export type TProjectUsedTechnology = {
  id?: string;
  projectId?: string;
  technologyId: string;
  technology: TTechnology;
};
