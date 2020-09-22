import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { ForDemosComponent } from './for-demos/for-demos.component';

const arr: Routes = [
  { path: '', component: DemoComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'fordemo', component: ForDemosComponent },
];

export const arrRouting = RouterModule.forRoot(arr);
