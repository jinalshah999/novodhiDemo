import { Routes, RouterModule } from '@angular/router';

import { AdduserComponent } from './adduser/adduser.component';
import { UsersDisplayComponent } from './users-display.component';

const arr: Routes = [
  //http://localhost:4200/user/
  {
    path: '',
    children: [
      { path: '', component: UsersDisplayComponent },
      //http://localhost:4200/user/add
      { path: 'add', component: AdduserComponent },
    ],
  },
];

export const userRouting = RouterModule.forChild(arr);
