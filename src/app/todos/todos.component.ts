import { Component, OnInit } from '@angular/core';
import { Todo, Todo1 } from './todo';
import { TaskdataService } from './taskdata.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private _data: TaskdataService,
    private _router: Router,
    private _acRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.arrTodos = this._acRoute.snapshot.data['xyz'];
  }
  onEditTask(item: Todo) {
    this._router.navigate(['/todos/edit', item.Id]);
  }
  onDeleteTask(item: Todo) {
    if (confirm('Are you sure you want to delete?')) {
      this._data.deleteTask(item.Id).subscribe((x: any) => {
        if (x.affectedRows == 1) {
          this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
        }
      });
    }
  }

  onTaskAdd() {
    this._data
      .addTask(new Todo(this.id, this.title, this.status))
      .subscribe((x) => {
        console.log(x);
        this.arrTodos.push(new Todo(this.id, this.title, this.status));
        this.flag = false;
      });
  }
  onNewAddTaskClick() {
    this.flag = true;
  }
  onCancelClick() {
    this.flag = false;
  }
}
