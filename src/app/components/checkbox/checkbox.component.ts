import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, booleanAttribute, input, model, output } from '@angular/core';
import { CheckboxChange } from '../../models/checkbox-change';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent {
  public onChange = output<CheckboxChange>();
  public checked = model(false);
  public value = input<any>();
  public color = input<'primary' | 'secondary'>('primary');
  public disabled = input(false, { transform: booleanAttribute });

  change(checked: boolean) {
    this.checked.set(checked);
    
    this.onChange.emit({
      checked: this.checked(),
      source: this
    });
  }
}
