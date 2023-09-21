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
    this.currentPage = 0;
    this.pageSize = 6;
    this.show = false;
    this.findMore = true;
    this.portfolios = [];
    this.categories = [];
    this.categoryId = 0;
    this.category = {} as Category;
  }

  ngOnInit(): void {
    this.categoryService.getBySection('PORTFOLIO').pipe(
      switchMap(categories => {
        this.categories = this.orderByProfesionalCategory(categories);
        this.categoryId = this.category.id
        return this.portfolioService.getByCategoryId(this.categoryId);
      }),
    ).subscribe(page => {
      this.disabledLoadMoreButton(page);
    });
  }

  onSearchByCategory(categoryId: number) {
    this.loading = true;
    this.show = false;
    this.currentPage = 0;
    this.portfolios = [];
    this.categoryId = categoryId;
    this.categoryId > 0 ? 
      this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) 
      : this.getPortfolios(this.currentPage, this.pageSize);
  }

  getMore(): void {
    this.currentPage++;
    this.categoryId > 0 ?
      this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) :
        this.getPortfolios(this.currentPage, this.pageSize);
  }

  private getPortfolios(page: number, elements: number) {
    this.portfolioService.getAllByPage(page, elements).subscribe((page) => {
      this.disabledLoadMoreButton(page);
    });
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.portfolioService.getByCategoryIdAndPage(categoryId, page, elements).subscribe((page) => {
      this.disabledLoadMoreButton(page);
    });
  }

  private disabledLoadMoreButton(page: Page<Portfolio>): void {
    this.portfolios = this.portfolios.concat(page.content);
    this.loading = false;
    this.show = true;
    this.findMore = !page.last;
  }

  private orderByProfesionalCategory(categories: Category[]): Category[] {
    const PROFESIONAL_CATEGORY = this.getProfesionalCategory(categories);
    if (PROFESIONAL_CATEGORY) {
      this.category = PROFESIONAL_CATEGORY;
      const INDEX = categories.findIndex(category => category.id === PROFESIONAL_CATEGORY.id);
      categories.splice(INDEX, 1);
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
