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

  currentPage: number;
  pageSize: number;
  totalRecords: number;
  portfolios: Portfolio[];
  categories: Category[];
  categoryId: number;
  loading: boolean;
  show: boolean;

  constructor(private route: ActivatedRoute,
              private portfolioService: PortfolioService,
              private categoryService: CategoryService) {
    this.loading = true;
    this.totalRecords = 0;
    this.currentPage = 0;
    this.pageSize = 6;
    this.show = false;
    this.portfolios = [];
    this.categories = [];
    this.categoryId = 0;
  }

  ngOnInit(): void {
    this.categoryService.getBySection('PORTFOLIO').pipe(
      switchMap(categories => {
        this.categories = categories;
        return this.portfolioService.getAllByPage(this.currentPage, this.pageSize);
      }),
    ).subscribe(page => {
      this.portfolios = page.content;
      this.totalRecords = page.totalElements;
      this.loading = false;
      this.show = true;
    });
  }

  pageChanged(page: number): void {
    this.loading = true;
    this.currentPage = page;
    this.categoryId > 0 ?
      this.getByCategoryIdAndPage(this.categoryId, this.currentPage - 1, this.pageSize) :
        this.getPortfolios(this.currentPage - 1, this.pageSize);
  }

  searchByCategory(categoryId: number) {
    this.loading = true;
    this.show = false;
    this.currentPage = 0;
    this.categoryId = categoryId;
    this.categoryId > 0 ? this.getPortfoliosByCategoryId(this.categoryId) : this.getPortfolios(this.currentPage, this.pageSize);
  }

  private getPortfolios(page: number, elements: number) {
    this.portfolioService.getAllByPage(page, elements).subscribe((page) => {
      this.portfolios = page.content;
      this.totalRecords = page.totalElements;
      this.loading = false;
      this.show = true;
    });
  }

  private getPortfoliosByCategoryId(categoryId: number) {
    this.portfolioService.getByCategoryId(categoryId).subscribe((page) =>{
        this.portfolios = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
        this.show = true;
      }
    );
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.portfolioService.getByCategoryIdAndPage(categoryId, page, elements).subscribe((page) =>{
        this.portfolios = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
        this.show = true;
      }
    );
  }

}
