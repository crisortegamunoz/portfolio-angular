export interface Experience {
  id: number;
  role?: string;
  entity: string;
  entityDescription?: string;
  responsabilities?: string[];
  technologies?: string[];
  startDate: Date;
  endDate: Date;
}
