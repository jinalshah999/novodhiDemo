import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { TodosComponent } from './todos/todos.component';
import { ForDemosComponent } from './for-demos/for-demos.component';
import { HighlighterDirective } from './highlighter.directive';
import { CreditcardDirective } from './creditcard.directive';

@NgModule({
  declarations: [AppComponent, DemoComponent, TodosComponent, ForDemosComponent, HighlighterDirective, CreditcardDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
