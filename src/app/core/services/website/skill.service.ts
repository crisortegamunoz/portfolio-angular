import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Skill } from '../../models/website/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private SERVICE = `assets/data`;

  constructor(private httpClient: HttpClient) {

  }

  getSkillsByCategoryName(name: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.SERVICE}/skills-by-percentage.json`);
  }

  getSkillsByCategoryNameOrderByPercentage(name: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.SERVICE}/skills.json`);
  }

}
