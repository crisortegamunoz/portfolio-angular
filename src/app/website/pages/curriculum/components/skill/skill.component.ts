import { Component, Input } from '@angular/core';
import { Skill } from '../../../../../core/models/website/skill.model';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.scss'],
    standalone: false
})
export class SkillComponent {

  @Input() skill: Skill | null;

  constructor() {
    this.skill = null;
  }

}
