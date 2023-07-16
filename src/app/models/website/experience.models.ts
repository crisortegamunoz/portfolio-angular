import { Category } from './caterogy.models';
import { Technology } from './technology.model';

export interface Experience {
  id: number;
  roleName: string;
  roleDescription: string;
  entityName: string;
  entityDescription: string;
  entityLocation: string;
  responsibilities: string[];
  periodStart: Date;
  periodEnd: Date;
  category: Category;
  technologies: Technology[];
}
