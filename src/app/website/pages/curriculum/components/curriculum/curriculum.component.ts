import { Component, OnInit } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { Skill } from '../../../../../models/website/skill.model';
import { Knowledge } from '../../../../../models/website/knowledge.models';
import { ExperienceService } from '../../../../../services/website/experience.service';
import { SkillService } from '../../../../../services/website/skill.service';
import { KnowledgeService } from '../../../../../services/website/knowledge.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html'
})
export class CurriculumComponent implements OnInit {

  workHistory: Experience[];
  studies: Experience[];
  skills: Skill[];
  knowledges: Knowledge[];

  constructor(private experienceService: ExperienceService,
              private skillService: SkillService,
              private knowledgeService: KnowledgeService) {
    this.workHistory = [];
    this.studies = [];
    this.skills = [];
    this.knowledges = [];
  }

  ngOnInit(): void {
    this.workHistory = this.experienceService.getWorks();
    this.studies = this.experienceService.getStudies();
    this.skills = this.skillService.getSkillToShow();
    this.knowledges = this.knowledgeService.getKnowledges();
  }

}
