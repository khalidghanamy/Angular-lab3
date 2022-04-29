import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { TestSpliceComponent } from './core/test-splice/test-splice.component';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ProductModule,FormsModule,SharedModule
  ],
  exports:[
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
