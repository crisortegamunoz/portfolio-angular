import { Component, Input } from '@angular/core';
import { Box } from 'src/app/models/website/box.model';

@Component({
  selector: 'app-about-box',
  templateUrl: './about-box.component.html'
})

export class AboutBoxComponent {

  @Input() box: Box | null;

  constructor() {
    this.box = null;
  }

}
