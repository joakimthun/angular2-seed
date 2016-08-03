import { Injectable } from '@angular/core';

import { AppConfig } from '../app.config';
import { IItem } from './item';

@Injectable()
export class ItemsService {
    // Dummy
    private _endpoint = `${AppConfig.ApiEndpoint}/items`;

    getItems(): Array<IItem> {
        let r = new Array<IItem>();

        for(let i = 1; i <= 100; i++) {
            r.push({
                title: 'Item: ' + i,
                description: 'Description ' + i,
                dateUtc: '2016-08-03 06:17:31 +0000 UTC'
            })
        }

        return r;
    }
}