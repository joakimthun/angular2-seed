import { PipeTransform, Pipe } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'formatdate'
})
export class FormatDatePipe implements PipeTransform {

    public transform(utcDateAsString: string) : string {
        // Example string: 2016-07-28 10:54:50 +0000 UTC

        var date = moment(utcDateAsString, "YYYY-MM-DD HH:mm Z");
        return date.format('DD MMM HH:mm');
    }
}