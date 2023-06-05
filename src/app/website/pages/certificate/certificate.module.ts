import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificatesComponent } from './components/certificates/certificates.component';


@NgModule({
  declarations: [
    CertificatesComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule
  ]
})
export class CertificateModule { }
