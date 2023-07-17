import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { Technology } from '../../../../../models/website/technology.model';

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

  loadStack(technologies: Technology[]): string {
    const nameArray: string[] = technologies.map((item) => {return item.name});
    const formattedNames: string = nameArray.map((name) => `${name}`).join(' / ');
    return `Stack Tecnológico: ${formattedNames}`;
  }

}
