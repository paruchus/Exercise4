
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exercise 3';
  image: string;
  alt: string;
  value: string;


  constructor() {
    this.image = 'assets/images/cat.PNG';
    this.alt = 'cat image';
    this.value = 'cat';

  }


  cat() {
    this.image = 'assets/images/cat.PNG';
    this.alt = 'cat image';
    this.value = 'cat';
  }

  dog() {
    this.image = 'assets/images/dog.PNG';
    this.alt = 'cat image';
    this.value = 'dog';
  }

  rabbit() {
    this.image = 'assets/images/rabbit.PNG';
    this.alt = 'rabbit image';
    this.value = 'rabbit';
  }



}
