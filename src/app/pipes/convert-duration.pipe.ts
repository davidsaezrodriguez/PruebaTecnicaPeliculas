import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertDuration'
})
export class ConvertDurationPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    const hours = Math.floor(value / 60) ;
    const min = value - hours*60
    return hours + 'h '+ min + 'min'
  }

}
