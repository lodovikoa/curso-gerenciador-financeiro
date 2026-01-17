import { Directive, ElementRef, inject, Renderer2, input, booleanAttribute, effect } from '@angular/core';

@Directive({
  selector: '[appFullWidth]',
})
export class FullWidthDirective {

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  applayFullWidth = input(true, { transform: booleanAttribute, alias: 'appFullWidth' });

  constructor() {
    effect(() => {
      if (this.applayFullWidth()) {
        this.renderer2.setStyle(this.elementRef.nativeElement, 'width', '100%');
      }
    });
  }
}
