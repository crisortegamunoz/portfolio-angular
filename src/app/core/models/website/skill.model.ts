
import { Category } from './caterogy.models';
import { Technology } from './technology.model';

export interface Skill {
    id: number;
    name?: string;
    show: boolean;
    percentage?: number;
    cssClass?: string;
    cssStyle?: string;
    technology?: Technology;
    category: Category;
}
