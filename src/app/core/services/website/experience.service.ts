import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Experience } from '../../models/website/experience.models';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private SERVICE = `assets/data`;

  constructor(private httpClient: HttpClient) {

  }

  getExperienceByCategoryName(categoryName: string): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(`${this.SERVICE}/experiences.json`);
  }

}
