import { Component, Input, OnInit } from '@angular/core';
import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { Portfolio } from '../../../../../models/website/portfolio.models';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html'
})
export class PortfolioItemComponent implements OnInit {

  @Input() portfolio: Portfolio | null;

  constructor() {
    this.portfolio = null;
  }

  ngOnInit(): void {

  }

}
