import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @Input('appChangeColor') appChangeColor: string;

  enable = true;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  @HostListener('click', ['$event']) onChangeColor(event) {
    if (this.enable) {
      this.renderer.setStyle(this.el.nativeElement, 'color', this.appChangeColor);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'color');
    }
    this.enable = !this.enable;
  }

}
