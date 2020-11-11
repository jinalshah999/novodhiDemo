import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { userRouting } from './user.routing';

import { AdduserComponent } from './adduser/adduser.component';
import { UsersDisplayComponent } from './users-display.component';

@NgModule({
  declarations: [AdduserComponent, UsersDisplayComponent],
  imports: [CommonModule, ReactiveFormsModule, userRouting],
})
export class UserModule {}
