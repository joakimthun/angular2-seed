import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { DataComponent } from './data/data.component';
import { AboutComponent } from './about/about.component';

// Styles
require('materialize-css/sass/materialize.scss');
require('./app.component.scss');

@Component({
  selector: 'ng-app',
  template: require('./app.component.html'),
  directives: [ROUTER_DIRECTIVES],
  precompile: [ 
    DataComponent, 
    AboutComponent 
  ]
})

export class AppComponent { }