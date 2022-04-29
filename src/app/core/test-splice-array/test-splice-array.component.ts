import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-splice-array',
  templateUrl: './test-splice-array.component.html',
  styleUrls: ['./test-splice-array.component.css']
})
export class TestSpliceArrayComponent implements OnInit {

  myArray='kahlid gamal'
  filter='k'
  constructor() { }

  ngOnInit(): void {
  }

}
