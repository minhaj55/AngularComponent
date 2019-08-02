import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyfont]'
})
export class MyfontDirective {

constructor(ele: ElementRef) {
ele.nativeElement.style.color = '#82B028';
ele.nativeElement.style.fontFamily = 'Century Gothic ';
ele.nativeElement.style.fontSize = '18px';
   }

}
