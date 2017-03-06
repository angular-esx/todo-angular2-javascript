import { Component } from '@angular/core';

export class AppComponent{}

AppComponent.annotations = [
  new Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
  })
];
