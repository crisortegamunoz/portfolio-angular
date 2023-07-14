import { Injectable } from '@angular/core';
import { Skill } from '../../models/website/skill.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private SERVICE = `/api/skills`;

  constructor(private httpClient: HttpClient) {

  }

  getSkillsByCategoryName(name: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.SERVICE}/category/${name}`);
  }

  getSkillsByCategoryNameOrderByPercentage(name: string): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(`${this.SERVICE}/orderByPercentage/${name}`);
  }

}
