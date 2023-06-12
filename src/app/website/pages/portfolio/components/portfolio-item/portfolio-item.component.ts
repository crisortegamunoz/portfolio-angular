import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from '../../../../../models/website/portfolio.models';
import { Router } from '@angular/router';

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
