
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exercise 3';
  image1: string;
  image2: string;
  image3: string;
  alt1: string;
  alt2: string;
  alt3: string;


  constructor() {
    this.image1 = 'assets/images/dice/side1.png';
    this.alt1 = 'cat image';

    this.image2 = 'assets/images/dice/side2.png';
    this.alt2 = 'dog image';

    this.image3 = 'assets/images/dice/side3.png';
    this.alt3 = 'rabbit image';
  }
  roll() {
    this.image1 = `assets/images/dice/side${rand1}.png`;
    this.alt1 = `side ${rand1}`;

    this.image2 = `assets/images/dice/side${rand2}.png`;
    this.alt2 = `side ${rand2}`;

    this.image3 = `assets/images/dice/side${rand3}.png`;
    this.alt3 = `side ${rand3}`;
  }



}
