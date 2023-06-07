import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { DaysSincePipe } from './pipe/days-since.pipe';
import { EllipsisPipe } from './pipe/ellipsis.pipe';



@NgModule({
  declarations: [
    MobileInformationComponent,
    FooterComponent,
    FilterButtonComponent,
    DaysSincePipe,
    EllipsisPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileInformationComponent,
    FooterComponent,
    DaysSincePipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
