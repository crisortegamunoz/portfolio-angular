import { Category } from '../models/website/caterogy.models';

export class Functions {


  private static classList = ['fill', 'pulse', 'close', 'raise', 'up', 'slide']

  public static getClassFromList() {
    const position = Math.floor(Math.random() * 6);
    return this.classList[position];
  }

  public static createCategoryAll(): Category {
    return {
      id: 0,
      name: 'Todos',
      section: 'TEMPORALY'
    }
  }

}
