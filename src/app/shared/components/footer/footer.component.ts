import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ChangeLogComponent } from '../change-log/change-log.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    standalone: false
})
export class FooterComponent {

  footerText: string;

  constructor(private dialog: Dialog) {
    this.footerText = this.getText()
  }

  getText(): string {
    const today = new Date();
    return `© ${today.getFullYear()} All Rights Reserved by me.`;
  }

  openDialog() {
    this.dialog.open(ChangeLogComponent);
  }

}
