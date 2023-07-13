import { Component, OnInit } from '@angular/core';

import { CertificateService } from '../../../../../services/website/certificate.service';
import { CategoryService } from '../../../../../services/website/category.service';
import { Certificate } from '../../../../../models/website/certificate.models';
import { Category } from '../../../../../models/website/caterogy.models';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent implements OnInit {

  currentPage: number;
  pageSize: number;
  totalRecords: number;
  certificates: Certificate[];
  categories: Category[];
  categoryId: string | null;
  loading: boolean;
  show: boolean;

  constructor(private certificateService: CertificateService,
              private categoryService: CategoryService) {
    this.totalRecords = 0;
    this.currentPage = 0;
    this.pageSize = 6;
    this.loading = true;
    this.show = false;
    this.certificates = [];
    this.categories = [];
    this.categoryId = null;
  }

  ngOnInit(): void {
    this.categories = this.categoryService.getBySection('Certificate');
    this.getCertificates(this.currentPage, this.pageSize);
  }

  pageChanged(page: number): void {
    this.loading = true;
    this.currentPage = page;
    this.getCertificates(this.currentPage - 1, this.pageSize);
  }

  searchByCategory(categoryId: number) {
    this.currentPage = 0;
    categoryId > 0 ? this.getCertificatesByCategoryId(categoryId) : this.getCertificates(this.currentPage, this.pageSize);
  }

  getCertificates(page: number, elements: number) {
    this.certificateService.getAllByPage(page, elements).subscribe((page) => {
      this.certificates = page.content;
      this.totalRecords = page.totalElements;
      this.loading = false;
      this.show = true;
    });
  }

  getCertificatesByCategoryId(categoryId: number) {
    this.certificateService.getByCategoryId(categoryId).subscribe((page) =>{
        this.certificates = page.content;
        this.loading = false;
        this.show = true;
      }
    );
  }

}
