import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from './product';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ParentComponent implements OnInit {
  selectedCategory: string = 'Watch';
  productsarr: Product[] = [new Product('abc', 123), new Product('def', 456)];
  constructor() {}

  ngOnInit(): void {}
  onMyEvent(val) {
    console.log(val, 'from parent');
    this.productsarr = this.productsarr.filter((x) => x.pname.startsWith(val));
  }
}
