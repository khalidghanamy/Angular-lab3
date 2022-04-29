import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: string[],key:string): string[] {
    let result:string[]=[];
    for (let index = 0; index < value.length; index++) {
      if (value[index].startsWith(key)) {
        result.push(value[index])
      }
      
    }
    return result;
  }

}
