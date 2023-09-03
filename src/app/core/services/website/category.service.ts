import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../../models/website/caterogy.models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private SERVICE = `/api/categories`;

  constructor(private httpClient: HttpClient) {

  }

  getBySection(section: string): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.SERVICE}/section/${section}`);
  }

}
