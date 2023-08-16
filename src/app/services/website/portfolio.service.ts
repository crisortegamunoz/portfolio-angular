import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Portfolio } from '../../models/website/portfolio.models';
import { Page } from '../../models/response/page.model';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private SERVICE = `/api/portfolios`;

  constructor(private httpClient: HttpClient) {

  }

  getAllByPage(page: number, elements: number): Observable<Page<Portfolio>> {
    const path = page > 0 && elements > 0 ? `?pages=${page}&elements=${elements}` : null;
    return path ? this.httpClient.get<Page<Portfolio>>(`${this.SERVICE}${path}`): this.httpClient.get<Page<Portfolio>>(`${this.SERVICE}`);
  }

  findById(id: number): Observable<Portfolio> {
    return this.httpClient.get<Portfolio>(`${this.SERVICE}/${id}`);
  }

  getByCategoryId(categoryId: number): Observable<Page<Portfolio>> {
    return this.httpClient.get<Page<Portfolio>>(`${this.SERVICE}/category/${categoryId}`);
  }

  getByCategoryIdAndPage(categoryId: number, page: number, elements: number): Observable<Page<Portfolio>> {
    const path = page > 0 && elements > 0 ? `?pages=${page}&elements=${elements}` : '';
    return this.httpClient.get<Page<Portfolio>>(`${this.SERVICE}/category/${categoryId}${path}`);
  }

}
