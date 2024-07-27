import { booleanAttribute, Component, inject, input } from '@angular/core';
import { RadioGroupComponent } from '../radio-group/radio-group.component';
import { Color } from '../models/color';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../color/color.directive';

@Component({
  selector: 'radio-button',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  public color = input<Color>();
  public disabled = input(false, { transform: booleanAttribute });
  public checked!: boolean;
  public value = input<any>();
  protected radioGroup: RadioGroupComponent = inject(RadioGroupComponent);

  protected onChange(): void {
    if (this.radioGroup.onChange)
      this.radioGroup.onChange(this.value());
  }
}