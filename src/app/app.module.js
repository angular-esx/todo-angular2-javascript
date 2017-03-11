import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    TodoComponent
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
