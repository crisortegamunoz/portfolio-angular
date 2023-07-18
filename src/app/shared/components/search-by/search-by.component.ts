import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../../models/website/caterogy.models';

@Component({
  selector: 'app-search-by',
  templateUrl: './search-by.component.html',
  styleUrls: ['./search-by.component.scss']
})
export class SearchByComponent {

  @Output() searchByCategory = new EventEmitter<number>();
  @Input() categories: Category[];
  @Input() showProfesionalFirst: Boolean;
  @Input() defaultCategory: Category;

  constructor() {
    this.showProfesionalFirst = false;
    this.categories = [];
    this.defaultCategory = {} as Category;
  }

  onSelected(value: string): void {
    this.searchByCategory.emit(parseInt(value));
  }


}
