import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../../models/website/certificate.models';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html'
})
export class CertificateComponent {

  @Input() certificate: Certificate | null;

  constructor() {
    this.certificate = null;
  }

}
