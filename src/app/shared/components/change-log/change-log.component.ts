import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html'
})
export class ChangeLogComponent {

  constructor(private dialogRef: DialogRef) {

  }

  close() {
    this.dialogRef.close();
  }

}
