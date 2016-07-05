import { Component } from '@angular/core';

import { DataService } from './data.service';
import { DataListComponent } from './data-list.component';

require('./data.component.scss');

@Component({
    template: require('./data.component.html'),
    providers: [ DataService ],
    directives: [ DataListComponent ]
})
export class DataComponent { 
}