import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/website/about-me.models';
import { AboutMeService } from 'src/app/services/website/about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html'
})
export class AboutMeComponent implements OnInit {

  about: About | null;

  constructor(private aboutMeService: AboutMeService) {
    this.about = null;
  }
  ngOnInit(): void {
    this.aboutMeService.getAll().subscribe(abouts => {
      this.about = abouts[0];
    });
  }



}
