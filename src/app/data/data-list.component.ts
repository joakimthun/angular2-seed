import { Component, OnInit } from '@angular/core';

import { IDataItem } from './data-item';
import { DataService } from './data.service';
import { ArrayTakePipe } from '../common/array-take.pipe';

require('./data-list.component.scss');

@Component({
    selector: 'data-list',
    template: require('./data-list.component.html'),
    providers: [ DataService ],
    pipes: [ ArrayTakePipe ]
})
export class DataListComponent implements OnInit { 
    items: IDataItem[];

    constructor(private _dataService: DataService) {
        this.items = [];
    }

    ngOnInit(): void {
        this.items = this._dataService.getItems();
    }
}