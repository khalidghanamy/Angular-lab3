import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTo'
})
export class PowerPipe implements PipeTransform {

  transform(number: number, power: number): number {
    return Math.pow(number,power);
  }
}
