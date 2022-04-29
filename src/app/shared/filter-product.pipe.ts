import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../_model/product.model';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], key: string): Product[] {
    let result:Product[]=[]
    result = value.filter(product=> product.product_name.startsWith(key))
    console.log(result,value.filter(product=> product.product_name.startsWith(key)));
    
    return result ;
  }

}
