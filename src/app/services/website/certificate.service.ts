import { Injectable } from '@angular/core';
import { Certificate } from '../../models/website/certificate.models'

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() {

  }

  getAll(): Certificate[] {
    const certificates: Certificate[] = [
      {
        id: 1,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 2,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 3,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 4,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 5,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 6,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },
      {
        id: 7,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },{
        id: 8,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      },{
        id: 9,
        name: 'test',
        image: '/assets/images/work_images/small/2.jpg',
        entity: '',
        completed: new Date(),
      }
    ];
    return certificates
  }
}
