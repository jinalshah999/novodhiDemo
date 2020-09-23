import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { ForDemosComponent } from './for-demos/for-demos.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
const arr: Routes = [
  { path: '', component: DemoComponent },
  { path: 'todo', component: TodosComponent },
  { path: 'fordemo', component: ForDemosComponent },
  { path: 'product', component: ParentComponent },
  { path: 'empadd', component: EmployeeComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/pagenotfound' },
];

export const arrRouting = RouterModule.forRoot(arr);
