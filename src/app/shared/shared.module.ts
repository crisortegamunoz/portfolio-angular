import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { DaysSincePipe } from './pipe/days-since.pipe';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { ChangeLogComponent } from './components/change-log/change-log.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoadingComponent } from './components/loading/loading.component';



@NgModule({
  declarations: [
    MobileInformationComponent,
    FooterComponent,
    FilterButtonComponent,
    DaysSincePipe,
    EllipsisPipe,
    ChangeLogComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    MobileInformationComponent,
    FooterComponent,
    LoadingComponent,
    DaysSincePipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
