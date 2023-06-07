import { Category } from "./caterogry.models";

export interface Certificate {
  id: number;
  name: string;
  image: string;
  url: string;
  entity: string;
  completed: Date;
  category: Category;
}
