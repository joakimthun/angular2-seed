import 'jquery';
import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'rxjs/Rx';
import 'bootstrap-sass/assets/javascripts/bootstrap.js';

import { enableProdMode } from '@angular/core';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app/app.component';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';

if (process.env.ENV === 'production') {
    enableProdMode();
}

bootstrap(AppComponent, [ 
    APP_ROUTER_PROVIDERS,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    HTTP_PROVIDERS 
]);