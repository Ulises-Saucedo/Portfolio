export type Projects = {
  projects: Project[];
};

export type Project = {
  name: string;
  technologies: string[];
  description: string;
  video: string;
  url: string;
};
