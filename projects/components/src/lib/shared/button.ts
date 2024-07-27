import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from "@angular/core";
import { Color, ColorType } from "./color";

@Directive()
export abstract class Button implements OnInit {
    public color = input<ColorType>();
    private el: ElementRef<HTMLButtonElement> = inject(ElementRef<HTMLButtonElement>);
    private renderer: Renderer2 = inject(Renderer2);

    public ngOnInit(): void {
        this.addClass('button');

        const colorClass = Color.getColorClass(this.color(), 'button');

        if (colorClass) {
            this.addClass(colorClass);
        }
    }


    protected addClass(className: string): void {
        this.renderer.addClass(this.el.nativeElement, className);
    }
}