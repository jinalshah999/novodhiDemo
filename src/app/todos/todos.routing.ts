import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { EdittodoComponent } from './edittodo/edittodo.component';

const arr: Routes = [
  //http://localhost:4200/todos/

  {
    path: '',
    children: [
      { path: '', component: TodosComponent },
      { path: 'edit/:id', component: EdittodoComponent },
    ],
  },
];

export const todosRouting = RouterModule.forChild(arr);
