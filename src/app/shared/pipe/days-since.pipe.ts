import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays } from 'date-fns';


@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(date: Date): string {
    const today = new Date();
    const message = differenceInDays(today, date) == 0 ? 'Publicado hoy' : `Publicado hace ${differenceInDays(today, date)} ${differenceInDays(today, date) === 1 ? 'día' : 'días'}`;
    return message;
  }

}
