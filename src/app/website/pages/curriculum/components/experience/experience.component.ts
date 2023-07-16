import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent  {

  @Input() experience: Experience | null;

  constructor() {
    this.experience = null;
  }

  ngOnInit(): void {

  }

}
