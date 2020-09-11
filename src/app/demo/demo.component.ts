import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnInit {
  a: number = 0;
  b: number = 0;
  sum: number = 0;
  no1: number = 10;
  str: string = 'Jinal Shah';
  flag: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  onButtonClick() {
    alert('hello world');
  }
  onKeyUp() {
    alert('you pressed the key');
  }

  onAddClick() {
    this.sum = this.a + this.b;
  }
}
