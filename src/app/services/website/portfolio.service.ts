import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Portfolio } from '../../models/website/portfolio.models';
import { Page } from '../../models/response/page.model';
import { WebsiteData } from 'src/app/util/data';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private SERVICE = `/api/portfolios`;

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<Page<Portfolio>> {
    return this.httpClient.get<Page<Portfolio>>(`${this.SERVICE}`);
  }

  findById(id: number): Observable<Portfolio> {
    return this.httpClient.get<Portfolio>(`${this.SERVICE}/${id}`);
  }

  getByCategoryId(categoryId: number) {

  }
}
