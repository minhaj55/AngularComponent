import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClr]'
})
export class ClrDirective {

  constructor(ele: ElementRef) {
    ele.nativeElement.style.value = ' ';
  }

}
