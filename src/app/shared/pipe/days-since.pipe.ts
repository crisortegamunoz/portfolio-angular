import { Pipe, PipeTransform } from '@angular/core';
import { differenceInDays } from 'date-fns';


@Pipe({
  name: 'daysSince'
})
export class DaysSincePipe implements PipeTransform {

  transform(publish: Date): string {
    const today = new Date();
    const publishDate = new Date(publish);
    const message = differenceInDays(today, publishDate) == 0 ? 'Publicado hoy' : `Publicado hace ${differenceInDays(today, publishDate)} ${differenceInDays(today, publishDate) === 1 ? 'día' : 'días'}`;
    return message;
  }

}
