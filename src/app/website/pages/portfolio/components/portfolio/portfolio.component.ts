import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { CategoryService } from '../../../../../services/website/category.service';

import { Portfolio } from '../../../../../models/website/portfolio.models';
import { Category } from '../../../../../models/website/caterogy.models';

import Swal from 'sweetalert2';


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
  categoryId: string | null;
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
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getBySection('Portfolio');
    this.getPortfolios(this.currentPage, this.pageSize);
  }

  pageChanged(page: number): void {
    this.loading = true;
    this.currentPage = page;
    this.getPortfolios(this.currentPage - 1, this.pageSize);
  }

  searchByCategory(categoryId: number) {
    this.currentPage = 0;
    categoryId > 0 ? this.getPortfoliosByCategoryId(categoryId) : this.getPortfolios(this.currentPage, this.pageSize);
  }

  getPortfolios(page: number, elements: number) {
    this.portfolioService.getAll(page, elements).subscribe((page) => {
      this.portfolios = page.content;
      this.totalRecords = page.totalElements;
      this.loading = false;
      this.show = true;
    });
  }

  getPortfoliosByCategoryId(categoryId: number) {
    this.portfolioService.getByCategoryId(categoryId).subscribe((page) =>{
        this.portfolios = page.content;
        this.loading = false;
        this.show = true;
      }
    );
  }

}
