import { Directive, ElementRef, inject, input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { Color } from '../models/color';

@Directive({
  selector: '[color]',
  standalone: true
})
export class ColorDirective implements OnChanges {
  public color = input<Color>();
  public componentName = input<string>();
  public setPrimaryAsDefault = input<boolean>(true);
  private el: ElementRef<HTMLElement> = inject(ElementRef<HTMLElement>);
  private renderer: Renderer2 = inject(Renderer2);


  public ngOnChanges(): void {
    this.setColorClass();
  }




  private setColorClass(): void {
    let colorClass: string;

    // If there is no color set and the primary color should not be set as default, exit the function
    if (!this.color() && !this.setPrimaryAsDefault()) return;

    // If a color is set, construct the color class using the color and component name
    if (this.color()) {
      colorClass = this.color() + '-' + this.componentName() + '-color';
    } else {
      // Otherwise, construct the color class using 'primary' and the component name
      colorClass = 'primary-' + this.componentName() + '-color';
    }

    // Add the constructed color class to the element's class list
    this.renderer.addClass(this.el.nativeElement, colorClass);
  }
}