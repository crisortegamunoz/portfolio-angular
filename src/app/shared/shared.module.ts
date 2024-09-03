import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';
import { FooterComponent } from './components/footer/footer.component';
import { DaysSincePipe } from './pipe/days-since.pipe';
import { EllipsisPipe } from './pipe/ellipsis.pipe';
import { ChangeLogComponent } from './components/change-log/change-log.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchByComponent } from './components/search-by/search-by.component';



@NgModule({
  declarations: [
    MobileInformationComponent,
    FooterComponent,
    DaysSincePipe,
    EllipsisPipe,
    ChangeLogComponent,
    LoadingComponent,
    SearchByComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    FormsModule
  ],
  exports: [
    MobileInformationComponent,
    FooterComponent,
    LoadingComponent,
    SearchByComponent,
    DaysSincePipe,
    EllipsisPipe
  ]
})
export class SharedModule { }
