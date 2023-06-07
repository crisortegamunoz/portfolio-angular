import { Injectable } from '@angular/core';
import { Category } from '../../models/website/caterogry.models';
import { WebsiteData } from '../../util/data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() {

  }

  getAll(): Category[] {
    return WebsiteData.loadCategories();
  }

  getBySection(section: string): Category[] {
    return this.getAll().filter(category => category.section === section);
  }

}
