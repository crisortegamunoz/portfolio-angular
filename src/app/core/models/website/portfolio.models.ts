
import { Category } from './caterogy.models';
import { Technology } from './technology.model';

export interface Portfolio {
  id: number;
  portfolioName: string;
  clientName: string;
  img: string;
  description: string;
  repository: string;
  demo: string;
  startDate: Date;
  endDate: Date;
  publishDate: Date;
  technologies: Technology[];
  category: Category;
}
