import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // arrName: string[] = ['jinal', 'shah'];
  // arrNumber: number[] = [1, 2, 3, 4, 5];
  // {"id":1,"title":"hello","status":"done"}
  arrTodos: Todo[] = [
    new Todo(1, 'wear a mask if you go out', 'done'),
    new Todo(2, 'email to your mananger', 'pending'),
  ];
  constructor() {}

  ngOnInit(): void {}
}
