import { Component, Input } from '@angular/core';
import { Knowledge } from '../../../../../models/website/knowledge.models';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html'
})
export class KnowledgeComponent {

  @Input() knowledge: Knowledge | null;

  constructor() {
    this.knowledge = null;
  }

}
