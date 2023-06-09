import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {

  @Input() message: string | null;

  constructor() {
    this.message = null;
  }

}
