// import global styles
import '../styles/app.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

// depending on the env mode, enable prod mode or add debugging modules
if (ENV === 'production') {
  enableProdMode();
} else {
  // Development
  Error.stackTraceLimit = Infinity;

  require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(AppModule);
