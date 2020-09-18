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
  ans: number = 0;
  no1: number = 10;
  str: string = 'Jinal Shah';
  str1: string = 'asfasfasd';
  flag: boolean = false;
  name: string = 'JINAL SHAH';
  price: number = 123;
  today: number = Date.now();
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
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
  onAdd1Click(no1, no2) {
    this.ans = parseInt(no1) + parseInt(no2);
  }
}
