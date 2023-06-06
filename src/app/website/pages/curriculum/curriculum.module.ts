import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SharedModule } from '../../../shared/shared.module';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillComponent } from './components/skill/skill.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';


@NgModule({
  declarations: [
    CurriculumComponent,
    ExperienceComponent,
    SkillComponent,
    KnowledgeComponent
  ],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    SharedModule
  ]
})
export class CurriculumModule { }
