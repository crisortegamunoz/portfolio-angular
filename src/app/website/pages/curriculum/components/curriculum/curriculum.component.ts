import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../../../core/models/website/experience.models';
import { Skill } from '../../../../../core/models/website/skill.model';
import { ExperienceService } from '../../../../../core/services/website/experience.service';
import { SkillService } from '../../../../../core/services/website/skill.service';
import { switchMap } from 'rxjs';
import { Functions } from '../../../../../core/util/functions';

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
        this.workHistory = works.filter(work => work.category.name === 'Trabajo').reverse();
        return this.experienceService.getExperienceByCategoryName('Educacion');
      }),
      switchMap((studies: Experience[]) => {
        this.studies = studies.filter(study => study.category.name === 'Educación').reverse();
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
