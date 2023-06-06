import { Injectable } from '@angular/core';
import { Knowledge } from '../../models/website/knowledge.models';

@Injectable({
  providedIn: 'root'
})
export class KnowledgeService {

  constructor() {

  }

  getKnowledges() {
    const knowledges: Knowledge[] = [
      {
        id: 1,
        name: 'Git'
      },
      {
        id: 2,
        name: 'Maven'
      },
      {
        id: 3,
        name: 'Jenkins'
      },
      {
        id: 4,
        name: 'Java'
      },
      {
        id: 5,
        name: 'FireBase'
      },
      {
        id: 6,
        name: 'Oracle'
      },
      {
        id: 7,
        name: 'Postgresql'
      },
      {
        id: 8,
        name: 'Metodologías Ágiles'
      },
      {
        id: 9,
        name: 'Gestión de tiempo'
      },
      {
        id: 10,
        name: 'Comunicación'
      },
      {
        id: 11,
        name: 'Problem-Solving'
      },
      {
        id: 12,
        name: 'Flexibilidad'
      }
    ];
    return knowledges;
  }

}
