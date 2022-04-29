import { Directive, ElementRef, Host, HostListener, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  @Input() hcolor='white'
  constructor(public e:ElementRef) {
    this.e.nativeElement.style.backgroundColor=this.hcolor;
   }

   ngOnChanges(){
    this.e.nativeElement.style.backgroundColor=this.hcolor='red';

   }

   @HostListener('mouseenter')
   changeColor(){
    this.hcolor='green'
    this.e.nativeElement.style.color=this.hcolor;
    
    

   }

   @HostListener('mouseleave')
   changeColoronleave(){
    this.hcolor='black'

    this.e.nativeElement.style.color=this.hcolor;

   }
}
