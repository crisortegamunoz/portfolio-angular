import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificatesComponent } from './components/certificates/certificates.component';
import { SharedModule } from '../../../shared/shared.module';
import { CertificateComponent } from './components/certificate/certificate.component';


@NgModule({
  declarations: [
    CertificatesComponent,
    CertificateComponent
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    SharedModule
  ]
})
export class CertificateModule { }
