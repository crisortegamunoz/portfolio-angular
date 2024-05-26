import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SharedModule } from '../../../shared/shared.module';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioDetailComponent } from './components/portfolio-detail/portfolio-detail.component';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    PortfolioComponent,
    PortfolioItemComponent,
    PortfolioDetailComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class PortfolioModule { }
