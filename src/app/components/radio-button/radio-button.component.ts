import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, model, output, signal } from '@angular/core';

@Component({
  selector: 'radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioButtonComponent {
  public onChange = output<any>();
  public checked = model(false);
  public value = input<any>();
  public color = signal<'primary' | 'secondary'>('primary');
  public name = signal<string>('radio');
  public disabled = signal<boolean>(false);

  change(checked: boolean) {
    this.checked.set(checked);

    this.onChange.emit({
      source: this,
      value: this.value()
    });
  }
}