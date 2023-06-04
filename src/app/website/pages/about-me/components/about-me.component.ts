import { Component, OnInit } from '@angular/core';
import { AboutBox } from 'src/app/models/website/about-me.models';
import { AboutMeService } from 'src/app/services/website/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  boxes: AboutBox[];

  constructor(private aboutMeService: AboutMeService) {
    this.boxes = [];
  }
  ngOnInit(): void {
    this.getAllBoxes();
  }

  getAllBoxes() {
    this.boxes = this.aboutMeService.getAll();
  }

}
