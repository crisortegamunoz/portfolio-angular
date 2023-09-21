import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs';

import { CertificateService } from '../../../../../core/services/website/certificate.service';
import { CategoryService } from '../../../../../core/services/website/category.service';

import { Certificate } from '../../../../../core/models/website/certificate.models';
import { Category } from '../../../../../core/models/website/caterogy.models';
import { Page } from '../../../../../core/models/response/page.model';

import { Functions } from '../../../../../core/util/functions';




@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent implements OnInit {

  currentPage: number;
  pageSize: number;
  certificates: Certificate[];
  categories: Category[];
  categoryId: number;
  loading: boolean;
  show: boolean;
  findMore: boolean;
  category: Category;

  constructor(private certificateService: CertificateService,
              private categoryService: CategoryService) {
    this.currentPage = 0;
    this.pageSize = 9;
    this.loading = true;
    this.show = false;
    this.findMore = true;
    this.certificates = [];
    this.categories = [];
    this.categoryId = 0;
    this.category = Functions.createCategoryAll();
  }

  ngOnInit(): void {
    this.categoryService.getBySection('CERTIFICATE').pipe(
      switchMap(categories => {
        this.categories = categories;
        return this.certificateService.getAllByPage(this.currentPage, this.pageSize);
      }),
    ).subscribe(page => {
      this.certificates = page.content;
      this.loading = false;
      this.show = true;
    });
  }

  onSearchByCategory(categoryId: number): void {
    this.loading = true;
    this.show = false;
    this.currentPage = 0;
    this.certificates = [];
    this.categoryId = categoryId;
    this.categoryId > 0 ? this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) : this.getCertificates(this.currentPage, this.pageSize);
  }

  getMore(): void {
    this.currentPage++;
    this.categoryId > 0 ?
      this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) :
        this.getCertificates(this.currentPage, this.pageSize);
  }

  private getCertificates(page: number, elements: number) {
    this.certificateService.getAllByPage(page, elements).subscribe((page) => {
      this.disabledLoadMoreButton(page);
    });
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.certificateService.getByCategoryIdAndPage(categoryId, page, elements).subscribe((page) => {
        this.disabledLoadMoreButton(page);
      }
    );
  }

  private disabledLoadMoreButton(page: Page<Certificate>): void {
    this.certificates = this.certificates.concat(page.content);
    this.loading = false;
    this.show = true;
    this.findMore = !page.last;
  }

}
