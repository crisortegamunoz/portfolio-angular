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
        name: 'Web Design',
        percentage: 65,
        cssClass: 'bg-[#FF6464] h-1 rounded-full',
        style: 'width: 65%'
      },
      {
        id: 2,
        name: 'Mobile App',
        percentage: 85,
        cssClass: 'bg-[#9272d4] h-1 rounded-full',
        style: 'width: 85%'
      },
      {
        id: 3,
        name: 'Illustrator',
        percentage: 75,
        cssClass: 'bg-[#5185d4] h-1 rounded-full',
        style: 'width: 75%'
      },
      {
        id: 4,
        name: 'Photoshope',
        percentage: 90,
        cssClass: 'bg-[#ca56f2] h-1 rounded-full',
        style: 'width: 90%'
      }
    ];
    return skills;
  }

}
