import { Box } from './box.model';

export interface About {
  id: number;
  title: string;
  descriptions: string[];
  boxes: Box[];
}
