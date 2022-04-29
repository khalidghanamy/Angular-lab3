import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-array',
  templateUrl: './filter-array.component.html',
  styleUrls: ['./filter-array.component.css']
})
export class FilterArrayComponent implements OnInit {


  myArray:string[]=[
    'kahlid','ahmed',"aly",'mohamed'
  ]
  key=''

  constructor() { }

  ngOnInit(): void {
  }

}
