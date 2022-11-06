import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('blue')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('red')
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
