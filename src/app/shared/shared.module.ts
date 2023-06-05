import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    MobileInformationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileInformationComponent,
    FooterComponent
  ]
})
export class SharedModule { }
