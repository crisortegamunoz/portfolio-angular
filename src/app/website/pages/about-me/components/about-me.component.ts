import { Component, OnInit } from '@angular/core';
import { About } from '../../../../core/models/website/about-me.models';
import { AboutMeService } from '../../../../core/services/website/about-me.service';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    standalone: false
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
