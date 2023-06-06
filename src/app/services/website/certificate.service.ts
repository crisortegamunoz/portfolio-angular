import { Injectable } from '@angular/core';
import { Certificate } from '../../models/website/certificate.models'
import { WebsiteData } from 'src/app/util/data';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  constructor() {

  }

  getAll(): Certificate[] {
    return WebsiteData.loadCertificate();
  }
}
