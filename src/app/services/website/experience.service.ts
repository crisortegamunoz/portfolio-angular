import { Injectable } from '@angular/core';
import { Experience } from '../../models/website/experience.models';
import { WebsiteData } from 'src/app/util/data';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() {

  }

  getWorks(): Experience[] {
    return WebsiteData.loadExperience();
  }

  getStudies(){
    const studies: Experience[] = [
      {
        id: 1,
        role: 'Instituto Profesional DuocUC, Ingeniería En Informática. - Santiago, Chile',
        roleDescription: '',
        entity: null,
        entityDescription: null,
        responsabilities: [
          'Miembro del Centro de Innovación y Transferencia Tecnológica'
        ],
        technologies: [],
        startDate: new Date(2012, 2, 10),
        endDate: new Date(2015, 11, 21),
        projects: []
      }
    ];
    return studies;
  }


}
