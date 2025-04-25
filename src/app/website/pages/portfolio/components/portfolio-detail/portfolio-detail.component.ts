import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { PortfolioService } from '../../../../../core/services/website/portfolio.service';
import { Portfolio } from '../../../../../core/models/website/portfolio.models';
import { Technology, TechnologyPortfolio } from '../../../../../core/models/website/technology.model';
import { Functions } from '../../../../../core/util/functions';



@Component({
    selector: 'app-portfolio-detail',
    templateUrl: './portfolio-detail.component.html',
    styleUrls: ['./portfolio-detail.component.scss'],
    standalone: false
})
export class PortfolioDetailComponent implements OnInit, AfterViewInit  {

  portfolio: Portfolio | null = null;
  technologies: TechnologyPortfolio[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private portfolioService: PortfolioService) {
    this.technologies = [];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
        if (id) {
          this.portfolioService.getAll().subscribe(portfolios => {
            const portfolioArray: Portfolio[] = portfolios.filter(portfolio => portfolio.id.toString() === id);
            if (portfolioArray.length > 0) {
              this.portfolio = portfolioArray[0];
              this.loadTechnologyForPortfolio(this.portfolio.technologies);
            } else {
              this.router.navigate(['/not-found']);
            }
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

  private loadTechnologyForPortfolio(technologies: Technology[]): void {
    technologies.forEach(item => {
      const tech:TechnologyPortfolio = { ...item, class: Functions.getClassFromList() };
      this.technologies.push(tech);
    })
  }
}
