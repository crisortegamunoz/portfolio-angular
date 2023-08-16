import { Component, OnInit } from '@angular/core';

//import { Select, initTE } from "tw-elements";
import { switchMap } from 'rxjs';

import { CertificateService } from '../../../../../services/website/certificate.service';
import { CategoryService } from '../../../../../services/website/category.service';
import { Certificate } from '../../../../../models/website/certificate.models';
import { Category } from '../../../../../models/website/caterogy.models';
import { Functions } from '../../../../../util/functions';



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
  categoryId: number;
  loading: boolean;
  show: boolean;
  category: Category;

  constructor(private certificateService: CertificateService,
              private categoryService: CategoryService) {
    this.totalRecords = 0;
    this.currentPage = 0;
    this.pageSize = 6;
    this.loading = true;
    this.show = false;
    this.certificates = [];
    this.categories = [];
    this.categoryId = 0;
    this.category = Functions.createCategoryAll();
  }

  ngOnInit(): void {
    //initTE({ Select });
    this.categoryService.getBySection('CERTIFICATE').pipe(
      switchMap(categories => {
        this.categories = categories;
        return this.certificateService.getAllByPage(this.currentPage, this.pageSize);
      }),
    ).subscribe(page => {
      this.certificates = page.content;
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
        this.getCertificates(this.currentPage - 1, this.pageSize);
  }

  onSearchByCategory(categoryId: number): void {
    this.loading = true;
    this.show = false;
    this.currentPage = 0;
    this.categoryId = categoryId;
    this.categoryId > 0 ? this.getCertificatesByCategoryId(this.categoryId) : this.getCertificates(this.currentPage, this.pageSize);
  }

  private getCertificates(page: number, elements: number) {
    this.certificateService.getAllByPage(page, elements).subscribe((page) => {
      this.certificates = page.content;
      this.totalRecords = page.totalElements;
      this.loading = false;
      this.show = true;
    });
  }

  private getCertificatesByCategoryId(categoryId: number) {
    this.certificateService.getByCategoryId(categoryId).subscribe((page) =>{
        this.certificates = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
        this.show = true;
      }
    );
  }

  private getByCategoryIdAndPage(categoryId: number, page: number, elements: number) {
    this.certificateService.getByCategoryIdAndPage(categoryId, page, elements).subscribe((page) =>{
        this.certificates = page.content;
        this.totalRecords = page.totalElements;
        this.loading = false;
        this.show = true;
      }
    );
  }

}
