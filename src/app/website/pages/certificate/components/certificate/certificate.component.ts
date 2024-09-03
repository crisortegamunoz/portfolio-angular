import { Component, Input } from '@angular/core';
import { Certificate } from '../../../../../core/models/website/certificate.models';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html'
})
export class CertificateComponent {

  @Input() certificate: Certificate | null;

  constructor() {
    this.certificate = null;
  }

  isDateWithin30Days(completed: Date): boolean {
    let isValid = false;
    if (completed) {
      const inputDate = new Date(completed);
      const currentDate = new Date();  
      const differenceInMilliseconds = currentDate.getTime() - inputDate.getTime();
      const differenceInDays = differenceInMilliseconds / (24 * 60 * 60 * 1000);
      isValid = differenceInDays <= 30;
    }
    return isValid;
  }

}
