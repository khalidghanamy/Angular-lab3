import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSpliceComponent } from './test-splice/test-splice.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TestSpliceArrayComponent } from './test-splice-array/test-splice-array.component';
import { PowerComponent } from './power/power.component';
import { FilterArrayComponent } from './filter-array/filter-array.component';



@NgModule({
  declarations: [
    TestSpliceComponent,
    TestSpliceArrayComponent,
    PowerComponent,
    FilterArrayComponent
  ],
  imports: [
    CommonModule,SharedModule,FormsModule
  ],
  exports:
  [
TestSpliceComponent,TestSpliceArrayComponent,PowerComponent,FilterArrayComponent
  ]
})
export class CoreModule { }
