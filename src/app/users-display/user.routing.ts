import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from './adduser/adduser.component';
import { UsersDisplayComponent } from './users-display.component';

const arr: Routes = [
  { path: 'user', component: UsersDisplayComponent },
  { path: 'adduser', component: AdduserComponent },
];

export const userRouting = RouterModule.forChild(arr);
