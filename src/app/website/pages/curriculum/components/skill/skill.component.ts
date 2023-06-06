import { Component, Input } from '@angular/core';
import { Skill } from '../../../../../models/website/skill.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent {

  @Input() skill: Skill | null;

  constructor() {
    this.skill = null;
  }

}
