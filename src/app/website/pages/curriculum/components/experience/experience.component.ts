import { Component, Input } from '@angular/core';
import { Experience } from '../../../../../models/website/experience.models';
import { Technology } from '../../../../../models/website/technology.model';

import { differenceInYears, differenceInMonths } from 'date-fns';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})

export class ExperienceComponent  {

  @Input() experience: Experience | null;
  periodOfTime: string;
  isAnimated = false;
  showMore: boolean;
  showLess: boolean;
  isStudy: boolean;

  constructor() {
    this.experience = null;
    this.periodOfTime = '';
    this.showMore = false;
    this.showLess = false;
    this.isStudy = false;
  }

  ngOnInit(): void {
    this.onShowMore();
    if (this.experience) {
      this.loadYearAndMonth(new Date(this.experience.periodStart), 
            this.experience.periodEnd ? new Date(this.experience.periodEnd) : new Date());
      this.isStudy = this.experience.category.name === 'Educación';
    }
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

  loadStack(technologies: Technology[]): string {
    const nameArray: string[] = technologies.map((item) => {return item.name});
    const formattedNames: string = nameArray.map((name) => `${name}`).join(' / ');
    return `Stack Tecnológico: ${formattedNames}`;
  }


  private loadYearAndMonth(begin: Date, end: Date): void {
    let yearDifference: number = end.getFullYear() - begin.getFullYear();
    let monthDifference: number = end.getMonth() - begin.getMonth();

    if (monthDifference < 0) {
      yearDifference--;
      monthDifference += 12;
    }

    if (yearDifference > 0) {
      monthDifference > 0 ? 
      this.periodOfTime = `${yearDifference} años, ${monthDifference} meses`
        : this.periodOfTime = `${yearDifference} años`
    } else {
      this.periodOfTime = `${monthDifference} meses`;
    }
  }

}
