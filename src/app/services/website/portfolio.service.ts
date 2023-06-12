import { Injectable } from '@angular/core';
import { Portfolio } from '../../models/website/portfolio.models';
import { WebsiteData } from 'src/app/util/data';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() {

  }

  getAll(): Portfolio[] {
    return WebsiteData.loadPortfolio();
  }

  findById(id: string) {
    const itemId = parseInt(id);
    const array = WebsiteData.loadPortfolio();
    return array.find(item => item.id === itemId)!;
  }

  getByCategoryId(categoryId: number): Portfolio[] {
    const array = WebsiteData.loadPortfolio();
    return array.filter(portfolio => portfolio.category.id === categoryId)
  }
}
