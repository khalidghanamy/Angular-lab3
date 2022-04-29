import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  cropwidth=0
 @Input('rating') rating=0

  constructor() {
    this.cropwidth=this.rating*15
   }
   ngOnChanges(changes:SimpleChanges):void{
    this.cropwidth=this.rating*15
   }

  ngOnInit(): void {
  }

}
