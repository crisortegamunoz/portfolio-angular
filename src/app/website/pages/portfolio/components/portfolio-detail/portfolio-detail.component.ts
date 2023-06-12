import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { Portfolio } from '../../../../../models/website/portfolio.models';
import { switchMap } from 'rxjs';


@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html'
})
export class PortfolioDetailComponent implements OnInit {

  portfolioId: string | null = null;
  portfolio: Portfolio | null = null;

  constructor(private route: ActivatedRoute, private portfolioService: PortfolioService) {
    debugger;
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.portfolioId = params.get('id');
        if (this.portfolioId) {
          this.portfolio = this.portfolioService.findById(this.portfolioId);
        }
    });
  }

  ngOnInit(): void {

  }

}
