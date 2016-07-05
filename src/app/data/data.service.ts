import { Injectable } from '@angular/core';
import { IDataItem } from './data-item';

@Injectable()
export class DataService {
    getItems(): IDataItem[] {
        return [
            {
                name: "Item1",
                value: 1
            },
            {
                name: "Item2",
                value: 2
            },
            {
                name: "Item3",
                value: 3
            },
            {
                name: "Item4",
                value: 4
            },
            {
                name: "Item5",
                value: 5
            },
            {
                name: "Item6",
                value: 6
            }
        ]
    }
}