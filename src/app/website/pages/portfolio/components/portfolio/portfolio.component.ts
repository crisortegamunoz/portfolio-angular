import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { CategoryService } from '../../../../../services/website/category.service';

import { Portfolio } from '../../../../../models/website/portfolio.models';
import { Category } from '../../../../../models/website/caterogy.models';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];
  categories: Category[];
  categoryId: string | null;
  loading: boolean;
  show: boolean;

  constructor(private route: ActivatedRoute,
              private portfolioService: PortfolioService,
              private categoryService: CategoryService) {
    this.loading = true;
    this.show = false;
    this.portfolios = [];
    this.categories = [];
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getBySection('Portfolio');
    this.getPortfolios();
  }

  searchByCategory(categoryId: number) {
    categoryId > 0 ? this.getPortfoliosByCategoryId(categoryId) : this.getPortfolios();
  }

  getPortfolios() {
    this.portfolioService.getAll().subscribe((page) => {
      this.portfolios = page.content;
      this.loading = false;
      this.show = true;
    },
    (error) => {
      this.loading = false;
      this.show = false;
    });
  }

  getPortfoliosByCategoryId(categoryId: number) {
    this.portfolioService.getByCategoryId(categoryId).subscribe((page) =>{
        this.portfolios = page.content;
        this.loading = false;
        this.show = true;
      },
      (error) => {
        this.loading = false;
        this.show = false;

      }
    );
  }

}
