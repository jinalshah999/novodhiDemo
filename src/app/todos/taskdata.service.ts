import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TaskdataService {
  url: string = 'http://localhost:3000/tasks';
  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get(this.url);
  }
}
