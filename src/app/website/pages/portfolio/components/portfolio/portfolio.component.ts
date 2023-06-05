import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { Portfolio } from '../../../../../models/website/portfolio.models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html'
})
export class PortfolioComponent implements OnInit {

  portfolios: Portfolio[];

  constructor(private portfolioService: PortfolioService) {
    this.portfolios = [];
  }

  ngOnInit(): void {
    this.portfolios = this.portfolioService.getAll();
  }

}
