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

  certificates: Certificate[];
  categories: Category[];
  categoryId: string | null;

  constructor(private certificateService: CertificateService,
              private categoryService: CategoryService) {
    this.certificates = [];
    this.categories = [];
    this.categoryId = null;
  }
  ngOnInit(): void {
    this.categories = this.categoryService.getBySection('Certificate');
    this.certificates = this.certificateService.getAll();
  }

  searchByCategory(categoryId: number | null) {
    this.certificates = categoryId ? this.certificateService.getByCategoryId(categoryId) : this.certificateService.getAll();
  }

}
