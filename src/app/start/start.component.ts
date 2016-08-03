import { Component, OnInit } from '@angular/core';

import { IItem } from './item';
import { ItemsService } from './items.service';

import { ArrayTakePipe } from '../common/array-take.pipe';
import { FormatDatePipe } from '../common/format-date.pipe';
import { InfiniteScrollComponent } from '../common/infinite-scroll.component';

require('./start.component.scss');

@Component({
    template: require('./start.component.html'),
    providers: [ ItemsService ],
    pipes: [ ArrayTakePipe, FormatDatePipe ]
})
export class StartComponent extends InfiniteScrollComponent implements OnInit {
    public items: Array<IItem>;

    constructor(private _itemsService: ItemsService) {
        super(30, 20);
        this.items = new Array<IItem>();
    }

    ngOnInit(): void {
        this.items = this._itemsService.getItems();
    }
}