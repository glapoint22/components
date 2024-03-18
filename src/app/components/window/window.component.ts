import { ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowComponent {
  private divEl = viewChild<ElementRef<HTMLElement>>('el');

  public setFocus(): void {
    this.divEl()?.nativeElement.focus();
  }

}
