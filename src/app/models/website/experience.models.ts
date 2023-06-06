export interface Experience {
  id: number;
  role?: string | null;
  roleDescription: string | null;
  entity: string | null;
  entityDescription: string | null;
  startDate: Date;
  endDate: Date;
  responsabilities: string[];
  technologies: string[];
  projects: string[];
}
