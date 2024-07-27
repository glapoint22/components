import { Directive, ElementRef, inject, input, OnChanges, Renderer2 } from '@angular/core';
import { Color, ColorType } from '../shared/color';

@Directive({
  selector: '[color]',
  standalone: true
})
export class ColorDirective implements OnChanges {
  public color = input<ColorType>();
  public componentName = input.required<string>();
  public setPrimaryAsDefault = input<boolean>(true);
  private el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private renderer: Renderer2 = inject(Renderer2);


  public ngOnChanges(): void {
    const colorClass = Color.getColorClass(this.color(), this.componentName(), this.setPrimaryAsDefault());

    if (colorClass) {
      this.renderer.addClass(this.el.nativeElement, colorClass);
    }
  }
}