import { Component, OnInit } from '@angular/core';
import { Todo, Todo1 } from './todo';
import { TaskdataService } from './taskdata.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  // arrName: string[] = ['jinal', 'shah'];
  // arrNumber: number[] = [1, 2, 3, 4, 5];
  // {"id":1,"title":"hello","status":"done"}
  id;
  title;
  status;
  flag: boolean = false;
  arrTodos: Todo[] = [];
  arrTodosinterface: Todo1[] = [];
  constructor(private _data: TaskdataService) {}

  ngOnInit(): void {
    this._data.getAllTasks().subscribe((data: Todo[]) => {
      this.arrTodos = data;
    });
  }
  onDeleteTask(item: Todo) {
    this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
  }
  onEditTask(item: Todo) {
    if (item.Status == 'done') {
      item.Status = 'pending';
    } else {
      item.Status = 'done';
    }
  }
  onTaskAdd() {
    this.arrTodos.push(new Todo(this.id, this.title, this.status));
    this.flag = false;
  }
  onNewAddTaskClick() {
    this.flag = true;
  }
  onCancelClick() {
    this.flag = false;
  }
}
