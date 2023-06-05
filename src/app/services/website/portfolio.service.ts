import { Injectable } from '@angular/core';
import { Portfolio } from '../../models/website/portfolio.models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {

  }

  getAll() {
    const items: Portfolio[] = [
      {
        id: 1,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      },
      {
        id: 2,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      },
      {
        id: 3,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      },
      {
        id: 4,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      },
      {
        id: 5,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      },
      {
        id: 6,
        projectCode: 'Test',
        projectName: 'Large name',
        image: '/assets/images/blog_images/small/5.jpg',
        descriptions: ['t', 't', 't'],
        workingFrom: new Date(),
        workingTo: new Date(),
        publish: new Date()
      }
    ]
    return items;
  }
}
