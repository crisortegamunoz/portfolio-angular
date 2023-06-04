import { Component, Input } from '@angular/core';
import { AboutBox } from 'src/app/models/website/about-me.models';

@Component({
  selector: 'app-about-box',
  templateUrl: './about-box.component.html'
})

export class AboutBoxComponent {

  @Input() box: AboutBox | null;

  constructor() {
    this.box = null;
  }

}
