import { Injectable } from '@angular/core';
import { Experience } from '../../models/website/experience.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private SERVICE = `/api/experiences`;

  constructor(private httpClient: HttpClient) {

  }

  getExperienceByCategoryName(categoryName: string): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(`${this.SERVICE}/category/${categoryName}`);
  }

}
