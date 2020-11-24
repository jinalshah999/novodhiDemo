import { Routes, RouterModule } from '@angular/router';

import { DemoComponent } from './demo/demo.component';
import { ForDemosComponent } from './for-demos/for-demos.component';
import { ParentComponent } from './parent/parent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';
import { UserguardService } from './userguard.service';
import { AngularMatrialDemoComponent } from './angular-matrial-demo/angular-matrial-demo.component';
const arr: Routes = [
  { path: '', component: DemoComponent },
  {
    path: 'fordemo',
    canActivate: [UserguardService],
    component: ForDemosComponent,
  },
  { path: 'ngdemo', component: AngularMatrialDemoComponent },
  { path: 'product', component: ParentComponent },
  { path: 'empadd', component: EmployeeComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user',
    canActivate: [UserguardService],
    loadChildren: () =>
      import('./users-display/user.module').then((x) => x.UserModule),
  },
  {
    path: 'todos',
    canLoad: [UserguardService],
    loadChildren: () =>
      import('./todos/todos.module').then((x) => x.TodosModule),
  },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: '**', redirectTo: '/pagenotfound' },
];

export const arrRouting = RouterModule.forRoot(arr);
