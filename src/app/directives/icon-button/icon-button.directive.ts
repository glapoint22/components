import { Directive, ElementRef, OnChanges, OnInit, Renderer2, booleanAttribute, inject, input } from '@angular/core';

@Directive({
  selector: '[icon-button]',
  standalone: true
})
export class IconButtonDirective implements OnInit, OnChanges {
  public color = input<'primary' | 'secondary'>();
  public disabled = input(false, { transform: booleanAttribute });
  private el: ElementRef<HTMLButtonElement> = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  public ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'icon-button');

    this.setColor();
  }


  public ngOnChanges(): void {
    this.setDisabled();
  }


  private setDisabled(): void {
    const cssClass: string = 'icon-button-disabled';

    if (this.disabled()) {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', true);
      this.renderer.addClass(this.el.nativeElement, cssClass);
    } else {
      this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
      this.renderer.removeClass(this.el.nativeElement, cssClass);
    }
  }


  private setColor(): void {
    switch (this.color()) {
      case 'primary':
        this.renderer.addClass(this.el.nativeElement, 'primary-icon-button-color');
        break;

      case 'secondary':
        this.renderer.addClass(this.el.nativeElement, 'secondary-icon-button-color');
        break;

      default:
        this.renderer.addClass(this.el.nativeElement, 'default-icon-button-color');
        break;
    }
  }
}