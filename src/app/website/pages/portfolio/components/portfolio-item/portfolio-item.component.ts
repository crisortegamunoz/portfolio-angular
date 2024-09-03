import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Portfolio } from '../../../../../core/models/website/portfolio.models';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio | null;

  constructor(private router: Router) {
    this.portfolio = null;
  }

  ngOnInit(): void {

  }

  showDetail(): void {
    this.router.navigate(['/portfolio-detail', this.portfolio?.id]);
  }

}
