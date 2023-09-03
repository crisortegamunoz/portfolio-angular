import { Component, Input } from '@angular/core';
import { Skill } from '../../../../../core/models/website/skill.model';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent {

  @Input() knowledge: Skill | null;

  constructor() {
    this.knowledge = null;
  }

}
