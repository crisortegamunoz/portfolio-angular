import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { PortfolioService } from '../../../../../services/website/portfolio.service';
import { Portfolio } from '../../../../../models/website/portfolio.models';
import { Functions } from '../../../../../util/functions';


@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit, AfterViewInit  {

  portfolio: Portfolio | null = null;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private portfolioService: PortfolioService) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
        if (id) {
          this.portfolioService.findById(parseInt(id)).subscribe(response => {
            this.portfolio = response;
          });
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

  getRandomClass() {
    return Functions.getClassFromList();
  }

}
