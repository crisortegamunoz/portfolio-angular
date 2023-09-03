import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { About } from '../../models/website/about-me.models';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  private SERVICE = `/api/abouts`;

  constructor(private httpClient: HttpClient) {

  }

  getAll(): Observable<About[]> {
    return this.httpClient.get<About[]>(`${this.SERVICE}`);
  }
}
