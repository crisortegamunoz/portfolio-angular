import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeRoutingModule } from './about-me-routing.module';
import { AboutMeComponent } from './components/about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutBoxComponent } from './components/about-box/about-box.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';


@NgModule({
  declarations: [
    AboutMeComponent,
    AboutBoxComponent,
    PersonalInfoComponent
  ],
  imports: [
    CommonModule,
    AboutMeRoutingModule,
    SharedModule
  ]
})
export class AboutMeModule { }
