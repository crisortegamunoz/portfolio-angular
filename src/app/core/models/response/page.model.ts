import { Pageable } from './pageable.model';
import { Sort } from './sort.model';

export interface Page<T> {
  content: Array<T>;
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}
