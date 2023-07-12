import { Category } from "./caterogry.models";

export interface Certificate {
  id: number;
  name: string;
  pdfUrl: string;
  imgUrl: string;
  entityName: string;
  completed: Date;
  category: Category
}
