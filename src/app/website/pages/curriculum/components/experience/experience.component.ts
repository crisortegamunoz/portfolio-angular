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
  isAnimated = false;
  showMore: boolean;
  showLess: boolean;
  isStudy: boolean;

  constructor() {
    this.experience = null;
    this.showMore = false;
    this.showLess = false;
    this.isStudy = false;
  }

  ngOnInit(): void {
    this.onShowMore();
    this.onShowIfCategoryStudy();
  }

  toggleAnimation() {
    this.isAnimated = !this.isAnimated;
    this.showMore = !this.showMore;
    this.showLess = !this.showMore
  }

  onShowMore() {
    if (this.experience
        && (this.experience.entityDescription
              || this.experience.roleDescription
              || this.experience.responsibilities.length > 3)) {
        this.showMore = true;
    }
  }

  onShowIfCategoryStudy() {
    if (!this.showMore) {
      this.isStudy = this.experience?.category.name === 'Estudio';
    }
  }

  loadStack(technologies: Technology[]): string {
    const nameArray: string[] = technologies.map((item) => {return item.name});
    const formattedNames: string = nameArray.map((name) => `${name}`).join(' / ');
    return `Stack Tecnológico: ${formattedNames}`;
  }

}
