import { Directive, ElementRef, OnChanges, OnInit, Renderer2, booleanAttribute, inject, input } from '@angular/core';

@Directive({
  selector: '[button]',
  standalone: true
})
export class ButtonDirective implements OnInit, OnChanges {
  public color = input<'primary' | 'secondary'>();
  public disabled = input(false, { transform: booleanAttribute });
  private el: ElementRef<HTMLButtonElement> = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);

  public ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'button');

    this.setColor();
    this.setIcon();
  }


  public ngOnChanges(): void {
    this.setDisabled();
  }


  private setDisabled(): void {
    const cssClass: string = 'button-disabled';

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
        this.renderer.addClass(this.el.nativeElement, 'primary-button-color');
        break;

      case 'secondary':
        this.renderer.addClass(this.el.nativeElement, 'secondary-button-color');
        break;

      default:
        this.renderer.addClass(this.el.nativeElement, 'default-button-color');
        break;
    }
  }


  private setIcon(): void {
    const childNodes = this.el.nativeElement.childNodes;

    if (childNodes.length === 1) return;

    childNodes.forEach((child: ChildNode, index: number) => {
      if (child.nodeName.toLowerCase() === 'icon') {
        if (index === 0) {
          this.renderer.setStyle(child, 'margin-right', '8px');
        } else {
          this.renderer.setStyle(child, 'margin-left', '8px');
        }
      }
    });
  }
}