import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskdataService } from '../taskdata.service';
import { Todo } from '../todo';
@Component({
  selector: 'app-edittodo',
  templateUrl: './edittodo.component.html',
  styleUrls: ['./edittodo.component.css'],
})
export class EdittodoComponent implements OnInit {
  todo_edit: FormGroup;
  status_arr: string[] = ['done', 'pending'];
  taskId;
  constructor(
    private _actroute: ActivatedRoute,
    private _data: TaskdataService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.todo_edit = new FormGroup({
      Id: new FormControl(),
      Title: new FormControl(),
      Status: new FormControl(),
    });
    this.taskId = this._actroute.snapshot.params['id'];
    this._data.getTaskByID(this.taskId).subscribe((data: Todo[]) => {
      this.todo_edit.patchValue({
        Id: data[0].Id,
        Title: data[0].Title,
        Status: data[0].Status,
      });
    });
  }
  todoEdit() {
    this._data.editTask(this.todo_edit.value).subscribe((x) => {
      this._router.navigate(['/todo']);
    });
  }
}
