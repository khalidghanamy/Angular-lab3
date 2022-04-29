import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addkhalid'
})
export class AddkhalidPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "$"+" "+value;
  }

}
