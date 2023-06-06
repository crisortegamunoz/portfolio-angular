import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  footerText: string;

  constructor() {
    this.footerText = this.getText()
  }

  getText(): string {
    const today = new Date();
    return `© ${today.getFullYear()} All Rights Reserved by me.`;
  }

}
