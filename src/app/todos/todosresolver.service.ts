import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { TaskdataService } from './taskdata.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class TodosresolverService implements Resolve<Todo[]> {
  constructor(private _taskData: TaskdataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Todo[] | Observable<Todo[]> | Promise<Todo[]> {
    return this._taskData.getAllTasks().pipe(
      map((x: Todo[]) => {
        console.log('from todos resolver', x);
        return x;
      })
    );
  }
}
