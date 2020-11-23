import { Routes, RouterModule } from '@angular/router';

import { TodosComponent } from './todos.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { TodosresolverService } from './todosresolver.service';
import { TodoeditguardService } from './todoeditguard.service';
const arr: Routes = [
  //http://localhost:4200/todos/

  {
    path: '',
    children: [
      {
        path: '',
        component: TodosComponent,
        resolve: { xyz: TodosresolverService },
      },
      {
        path: 'edit/:id',
        component: EdittodoComponent,
        canDeactivate: [TodoeditguardService],
      },
    ],
  },
];

export const todosRouting = RouterModule.forChild(arr);
