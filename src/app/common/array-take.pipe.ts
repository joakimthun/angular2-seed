import {  PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'take'
})
export class ArrayTakePipe implements PipeTransform {

    transform(value: any[], count: number): any[] {
        return value.slice(0, count);
    }
}