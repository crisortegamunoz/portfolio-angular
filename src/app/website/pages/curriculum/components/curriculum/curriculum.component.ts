import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { Skill } from '../../../../../models/website/skill.model';
import { ExperienceService } from '../../../../../services/website/experience.service';
import { SkillService } from '../../../../../services/website/skill.service';
import { switchMap } from 'rxjs';
import { Functions } from '../../../../../util/functions';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent implements OnInit {

  workHistory: Experience[];
  studies: Experience[];
  skills: Skill[];
  knowledges: Skill[];
  loading: boolean;

  constructor(private experienceService: ExperienceService,
              private skillService: SkillService) {
    this.workHistory = [];
    this.studies = [];
    this.skills = [];
    this.knowledges = [];
    this.loading = true;
  }

  ngOnInit(): void {

    this.skillService.getSkillsByCategoryName('Habilidad').pipe(
      switchMap((skills: Skill[]) => {
        this.skills = skills;
        return this.experienceService.getExperienceByCategoryName('Trabajo');
      }),
      switchMap((works: Experience[]) => {
        this.workHistory = works;
        return this.experienceService.getExperienceByCategoryName('Educacion');
      }),
      switchMap((studies: Experience[]) => {
        this.studies = studies;
        return this.skillService.getSkillsByCategoryNameOrderByPercentage('Conocimiento');
      })
    ).subscribe((knowledges => {
        this.loadClassWithRandom(knowledges);
      })
    );
  }

  private loadClassWithRandom(knowledges: Skill[]): void {
    knowledges.forEach(item => {
      item.cssClass = Functions.getClassFromList();
      this.knowledges.push(item);
    })
    this.loading = false;
  }

}
