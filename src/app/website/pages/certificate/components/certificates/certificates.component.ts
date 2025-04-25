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
    templateUrl: './certificates.component.html',
    standalone: false
})
export class CertificatesComponent implements OnInit {

  currentPage: number;
  pageSize: number;
  allCertificates: Certificate[];
  certificates: Certificate[];
  categories: Category[];
  categoryId: number;
  loading: boolean;
  show: boolean;
  findMore: boolean;
  category: Category;

  constructor(private certificateService: CertificateService,
              private categoryService: CategoryService) {
    this.currentPage = 1;
    this.pageSize = 9;
    this.loading = true;
    this.show = false;
    this.findMore = true;
    this.certificates = [];
    this.allCertificates = [];
    this.categories = [];
    this.categoryId = 0;
    this.category = Functions.createCategoryAll();
  }

  ngOnInit(): void {
    this.categoryService.getBySection('CERTIFICATE').pipe(
      switchMap(categories => {
        this.categories = categories.filter(category => category.section === 'CERTIFICATE');
        return this.certificateService.getAll();
      }),
    ).subscribe(certificates => {
      this.allCertificates = certificates;
      this.getMore();
      this.loading = false;
      this.show = true;
    });
  }

  onSearchByCategory(categoryId: number): void {
    this.loading = true;
    this.show = false;
    this.currentPage = 1;
    this.certificates = [];
    this.categoryId = categoryId;
    this.categoryId > 0 ? this.getByCategoryIdAndPage(this.categoryId, this.currentPage, this.pageSize) : this.getCertificates();
  }

  getMore(): void {
    this.certificates = this.certificates.concat(this.allCertificates.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize));
    this.currentPage++;
    this.disabledLoadMoreButton();
  }

  private getCertificates() {
    this.certificateService.getAll().subscribe(certificates => {
      this.allCertificates = certificates;
      this.getMore();
      this.loading = false;
      this.show = true;
    });
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.certificateService.getAll().subscribe(certificates => {
      this.allCertificates = certificates.filter(certificate => certificate.category.id === categoryId);
      this.getMore();
      this.loading = false;
      this.show = true;
    });
  }

  private disabledLoadMoreButton(): void {
    this.findMore = !(this.certificates.length === this.allCertificates.length);
  }

}
