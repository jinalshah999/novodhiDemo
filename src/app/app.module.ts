import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { arrRouting } from './app.routing';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
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
import { LoaderComponent } from './loader/loader.component';
import { HttpinterceptorestokenService } from './httpinterceptorestoken.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMatrialDemoComponent } from './angular-matrial-demo/angular-matrial-demo.component';

import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ForDemosComponent,
    HighlighterDirective,
    CreditcardDirective,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    PagenotfoundComponent,
    EmployeeComponent,
    SignupComponent,
    LoaderComponent,
    AngularMatrialDemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    arrRouting,
    CKEditorModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterceptorestokenService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
