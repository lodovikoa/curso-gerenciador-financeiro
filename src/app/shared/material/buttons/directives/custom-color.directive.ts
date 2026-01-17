import { Directive, effect, input, inject, ElementRef, Renderer2 } from '@angular/core';

type CollorType = 'error';

@Directive({
  selector: '[matButton]',
})
export class CustomColorDirective {

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  color = input<CollorType>(undefined, { alias: 'matButtonColor' } );

  constructor() {
    effect(() => {
      if(this.color()) {
        this.renderer2.addClass(this.elementRef.nativeElement, `btn-${this.color()}`);
      };
   });
  }

}
