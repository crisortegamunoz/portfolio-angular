import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { ExperienceService } from '../../../../../services/website/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent  {

  @Input() experience: Experience | null;

  constructor(private experienceService: ExperienceService) {
    this.experience = null;
  }

}
