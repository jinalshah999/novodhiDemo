import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root',
})
export class TaskdataService {
  //url: string = 'http://localhost:3000/tasks';
  url: string = 'https://restapidemonode.herokuapp.com/tasks/';
  constructor(private _http: HttpClient) {}

  getAllTasks() {
    return this._http.get(this.url);
  }
  getTaskByID(id) {
    return this._http.get(this.url + id);
  }
  addTask(item: Todo) {
    let body = JSON.stringify(item);
    return this._http.post(this.url, body);
  }
  deleteTask(id) {
    return this._http.delete(this.url + id);
  }
  editTask(item: Todo) {
    // let head = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(item);
    return this._http.put(this.url + item.Id, body);
  }
}
