import { Injectable } from '@angular/core';
import { Skill } from '../../models/website/skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor() { }

  getSkillToShow(): Skill[] {
    const skills: Skill[] = [
      {
        id: 1,
        name: 'Capacidad de Análisis',
        percentage: 80,
        cssClass: 'bg-[#FF6464] h-1 rounded-full',
        style: 'width: 80%'
      },
      {
        id: 2,
        name: 'JavaScript',
        percentage: 80,
        cssClass: 'bg-[#9272d4] h-1 rounded-full',
        style: 'width: 80%'
      },
      {
        id: 3,
        name: 'Java',
        percentage: 75,
        cssClass: 'bg-[#5185d4] h-1 rounded-full',
        style: 'width: 75%'
      },
      {
        id: 4,
        name: 'Angular',
        percentage: 70,
        cssClass: 'bg-[#ca56f2] h-1 rounded-full',
        style: 'width: 70%'
      }
    ];
    return skills;
  }

}
