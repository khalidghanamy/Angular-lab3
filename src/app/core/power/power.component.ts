import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  number:number=1;
  power:number=1;
  constructor() { }

  ngOnInit(): void {
  }

}
