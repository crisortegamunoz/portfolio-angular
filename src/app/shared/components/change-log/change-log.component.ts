import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { Experience } from 'src/app/models/website/experience.models';
import { WebsiteData } from 'src/app/util/data';

@Component({
  selector: 'app-change-log',
  templateUrl: './change-log.component.html'
})
export class ChangeLogComponent {

  experiences: Experience[];

  constructor(private dialogRef: DialogRef) {
    this.experiences = WebsiteData.loadExperience();
  }

  close() {
    this.dialogRef.close();
  }

}
