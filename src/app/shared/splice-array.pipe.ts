import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spliceArray'
})
export class SpliceArrayPipe implements PipeTransform {

  transform(_myArray: string, filter: string): any {
    return _myArray.split(" ").filter((item) => item == filter);
  }

}
