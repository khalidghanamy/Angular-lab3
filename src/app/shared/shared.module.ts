import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { AddkhalidPipe } from './addkhalid.pipe';
import { SplicePipe } from './splice.pipe';
import { SpliceArrayPipe } from './splice-array.pipe';
import { PowerPipe } from './power.pipe';
import { FilterPipe } from './filter.pipe';
import { FilterProductPipe } from './filter-product.pipe';




@NgModule({
  declarations: [
    StarComponent,AddkhalidPipe, SplicePipe, SpliceArrayPipe, PowerPipe, FilterPipe, FilterProductPipe
  ],
  imports: [
    CommonModule,
  ]
  ,
  exports:[
    StarComponent,AddkhalidPipe,SplicePipe,SpliceArrayPipe,PowerPipe,FilterPipe,FilterProductPipe
  ]
})
export class SharedModule { }
