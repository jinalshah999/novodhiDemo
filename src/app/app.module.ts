import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { arrRouting } from './app.routing';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { ForDemosComponent } from './for-demos/for-demos.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeComponent } from './employee/employee.component';
import { SignupComponent } from './signup/signup.component';

import { CKEditorModule } from 'ckeditor4-angular';
@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    TodosComponent,
    ForDemosComponent,
    HighlighterDirective,
    CreditcardDirective,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    PagenotfoundComponent,
    EmployeeComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    arrRouting,
    CKEditorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
