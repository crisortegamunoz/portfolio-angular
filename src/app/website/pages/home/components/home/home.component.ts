import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {

  changingText: string;
  texts: string[];
  currentIndex: number;

  constructor() {
    this.changingText = 'Backend Developer';
    this.texts = ['Backend Developer', 'Frontend Developer', 'FullStack Developer'];
    this.currentIndex = 0;
  }

  ngOnInit() {
    setInterval(() => {
      this.changingText = this.texts[this.currentIndex];
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }, 2000);
  }

}
