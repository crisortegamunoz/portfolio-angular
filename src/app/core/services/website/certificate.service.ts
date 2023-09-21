import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Page } from '../../models/response/page.model';
import { Certificate } from '../..//models/website/certificate.models'

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  private SERVICE = `/api/certificates`;

  constructor(private httpClient: HttpClient) {

  }

  getAllByPage(page: number, elements: number): Observable<Page<Certificate>> {
    const path = page >= 0 && elements > 0 ? `?pages=${page}&elements=${elements}` : '';
    return path ? this.httpClient.get<Page<Certificate>>(`${this.SERVICE}${path}`) : this.httpClient.get<Page<Certificate>>(`${this.SERVICE}`);
  }

  findById(id: number): Observable<Certificate> {
    return this.httpClient.get<Certificate>(`${this.SERVICE}/${id}`);
  }

  getByCategoryId(categoryId: number): Observable<Page<Certificate>> {
    return this.httpClient.get<Page<Certificate>>(`${this.SERVICE}/category/${categoryId}`);
  }

  getByCategoryIdAndPage(categoryId: number, page: number, elements: number): Observable<Page<Certificate>> {
    const path = page >= 0 && elements > 0 ? `?pages=${page}&elements=${elements}` : '';
    return this.httpClient.get<Page<Certificate>>(`${this.SERVICE}/category/${categoryId}${path}`);
  }

}
