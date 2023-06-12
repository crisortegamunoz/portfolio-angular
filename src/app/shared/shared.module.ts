import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { DaysSincePipe } from './pipe/days-since.pipe';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ChangeLogComponent } from './components/change-log/change-log.component';

import { ScrollingModule } from '@angular/cdk/scrolling';



@NgModule({
  declarations: [
    MobileInformationComponent,
    FooterComponent,
    FilterButtonComponent,
    DaysSincePipe,
    EllipsisPipe,
    SpinnerComponent,
    ChangeLogComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule
  ],
  exports: [
    MobileInformationComponent,
    FooterComponent,
    SpinnerComponent,
    DaysSincePipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
