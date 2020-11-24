import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TodosComponent } from './todos.component';
import { EdittodoComponent } from './edittodo/edittodo.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { todosRouting } from './todos.routing';

@NgModule({
  declarations: [TodosComponent, EdittodoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    todosRouting,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class TodosModule {}
