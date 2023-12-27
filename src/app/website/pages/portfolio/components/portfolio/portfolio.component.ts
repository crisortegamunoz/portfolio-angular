import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PortfolioService } from '../../../../../core/services/website/portfolio.service';
import { CategoryService } from '../../../../../core/services/website/category.service';

import { Portfolio } from '../../../../../core/models/website/portfolio.models';
import { Category } from '../../../../../core/models/website/caterogy.models';
import { Functions } from '../../../../../core/util/functions';
import { Page } from '../../../../../core/models/response/page.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  currentPage: number;
  pageSize: number;
  totalRecords: number;
  allPortfolios: Portfolio[];
  portfolios: Portfolio[];
  categories: Category[];
  categoryId: number;
  loading: boolean;
  show: boolean;
  category: Category;
  findMore: boolean;

  constructor(private route: ActivatedRoute,
              private portfolioService: PortfolioService,
              private categoryService: CategoryService) {
    this.loading = true;
    this.totalRecords = 0;
    this.currentPage = 1;
    this.pageSize = 6;
    this.show = false;
    this.findMore = true;
    this.allPortfolios = [];
    this.portfolios = [];
    this.categories = [];
    this.categoryId = 0;
    this.category = {} as Category;
  }

  ngOnInit(): void {
    this.categoryService.getBySection('PORTFOLIO').pipe(
      switchMap(categories => {
        this.categories = this.orderByProfesionalCategory(categories.filter(category => category.section === 'PORTFOLIO'));
        return this.portfolioService.getAll();
      }),
    ).subscribe(portfolios => {
      this.allPortfolios = portfolios;
      return this.getByCategoryIdAndPage(this.category.id, this.currentPage, this.pageSize);
    });
  }

  onSearchByCategory(categoryId: number) {
    this.loading = true;
    this.show = false;
    this.currentPage = 1;
    this.portfolios = [];
    this.categoryId = categoryId;
    this.categoryId > 0 ? 
      this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) 
      : this.getPortfolios();
  }

  getMore(): void {
    this.portfolios = this.portfolios.concat(this.allPortfolios.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize));
    this.currentPage++;
    this.disabledLoadMoreButton();
  }

  private getPortfolios() {
    this.portfolioService.getAll().subscribe(portfolios => {
      this.allPortfolios = portfolios;
      this.getMore();
      this.loading = false;
      this.show = true;
    });
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.portfolioService.getAll().subscribe(portfolios => {
      this.allPortfolios = portfolios.filter(portfolio => portfolio.category.id === categoryId);
      this.getMore();
      this.loading = false;
      this.show = true;
    });
  }

  private disabledLoadMoreButton(): void {
    this.findMore = !(this.portfolios.length === this.allPortfolios.length);
  }

  private orderByProfesionalCategory(categories: Category[]): Category[] {
    const PROFESIONAL_CATEGORY = this.getProfesionalCategory(categories);
    if (PROFESIONAL_CATEGORY) {
      this.category = PROFESIONAL_CATEGORY;
      const INDEX = categories.findIndex(category => category.id === PROFESIONAL_CATEGORY.id);
      categories.push(Functions.createCategoryAll());
    }
    return categories;
  }

  private getProfesionalCategory(categories: Category[]): Category | undefined {
    const category = categories.find((category) => {
      return category.name === 'Profesional'
    });
    return category;
  }

}
