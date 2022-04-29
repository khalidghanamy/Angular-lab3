import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    ProductComponent,
    HighlightDirective,
  ],
  imports: [
    CommonModule,FormsModule,SharedModule,CoreModule
  ]
  ,
  exports:[
    ProductComponent
  ]
})
export class ProductModule { }
