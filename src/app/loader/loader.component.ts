import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CommanService } from '../comman.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
})
export class LoaderComponent implements OnInit {
  constructor(private _data: CommanService) {}
  $isLoading: Subject<boolean> = this._data.isLoading;
  ngOnInit(): void {}
}
