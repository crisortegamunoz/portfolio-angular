import { Category } from "./caterogry.models";

export interface Portfolio {
  id: number;
  projectName: string;
  image: string;
  descriptions: string[];
  repository?: string;
  demo?: string;
  workingFrom: Date;
  workingTo: Date | null;
  publish: Date;
  category: Category;
  technologies: string[];
}
