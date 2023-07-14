import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { Skill } from '../../../../../models/website/skill.model';
import { ExperienceService } from '../../../../../services/website/experience.service';
import { SkillService } from '../../../../../services/website/skill.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent implements OnInit {

  workHistory: Experience[];
  studies: Experience[];
  skills: Skill[];
  knowledges: Skill[];
  classList: string[];

  constructor(private experienceService: ExperienceService,
              private skillService: SkillService) {
    this.workHistory = [];
    this.studies = [];
    this.skills = [];
    this.knowledges = [];
    this.classList = ['fill', 'pulse', 'close', 'raise', 'up', 'slide']
  }

  ngOnInit(): void {
    this.workHistory = this.experienceService.getWorks();
    this.studies = this.experienceService.getStudies();
    this.skillService.getSkillsByCategoryName('Habilidad').pipe(
      switchMap((skills: Skill[]) => {
        this.skills = skills;
        return this.skillService.getSkillsByCategoryNameOrderByPercentage('Conocimiento');
      })
    ).subscribe((knowledges => {
        this.loadClassWithRandom(knowledges);
      })
    );
  }

  private loadClassWithRandom(knowledges: Skill[]): void {
    knowledges.forEach(item => {
      const position = Math.floor(Math.random() * 6);
      item.cssClass = this.classList[position];
      this.knowledges.push(item);
    })
  }

}
