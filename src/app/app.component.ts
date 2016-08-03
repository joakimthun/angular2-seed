import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppConfig } from './app.config';

import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { ItemsService } from './start/items.service';

require('bootstrap-sass/assets/stylesheets/_bootstrap.scss');
require('loaders.css/src/loaders.scss');
require('./app.component.scss');

@Component({
    selector: 'ng-app',
    template: require('./app.component.html'),
    directives: [ ROUTER_DIRECTIVES ],
    providers: [ ItemsService, AppConfig ],
    precompile: [
        StartComponent,
        AboutComponent,
    ]
})
export class AppComponent {
}