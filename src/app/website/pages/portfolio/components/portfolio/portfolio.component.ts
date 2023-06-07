import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { CategoryService } from '../../../../../services/website/category.service';

import { Portfolio } from '../../../../../models/website/portfolio.models';
import { Category } from '../../../../../models/website/caterogry.models';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];
  categories: Category[];
  categoryId: string | null;

  constructor(private route: ActivatedRoute,
              private portfolioService: PortfolioService,
              private categoryService: CategoryService) {
    this.portfolios = [];
    this.categories = [];
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getBySection('Portfolio');
    this.portfolios = this.portfolioService.getAll()
  }

  searchByCategory(categoryId: number | null) {
    this.portfolios = categoryId ? this.portfolioService.getByCategoryId(categoryId) : this.portfolioService.getAll();
  }

}
