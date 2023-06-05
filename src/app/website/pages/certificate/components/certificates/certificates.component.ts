import { Component, OnInit } from '@angular/core';

import { Certificate } from '../../../../../models/website/certificate.models';
import { CertificateService } from '../../../../../services/website/certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html'
})
export class CertificatesComponent implements OnInit {

  certificates: Certificate[];

  constructor(private certificateService: CertificateService) {
    this.certificates = [];
  }
  ngOnInit(): void {
    this.certificates = this.certificateService.getAll();
  }

}
