import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileInformationComponent } from './components/mobile-information/mobile-information.component';



@NgModule({
  declarations: [
    MobileInformationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileInformationComponent
  ]
})
export class SharedModule { }
