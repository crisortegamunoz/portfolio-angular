import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { Portfolio } from '../../../../../models/website/portfolio.models';


@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html'
})
export class PortfolioDetailComponent implements OnInit, AfterViewInit  {


  portfolioId: string | null = null;
  portfolio: Portfolio | null = null;

  constructor(private router: Router, private route: ActivatedRoute, private portfolioService: PortfolioService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.portfolioId = params.get('id');
        if (this.portfolioId) {
          this.portfolio = this.portfolioService.findById(this.portfolioId);
        }
    });
  }

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

}
