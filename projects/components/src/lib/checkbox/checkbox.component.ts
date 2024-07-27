import { booleanAttribute, Component, forwardRef, input } from '@angular/core';
import { Color } from '../models/color';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorDirective } from '../color/color.directive';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [CommonModule, ColorDirective],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxComponent),
    multi: true
  }]
})
export class CheckboxComponent implements ControlValueAccessor {
  public color = input<Color>();
  public disabled = input(false, { transform: booleanAttribute });
  public checked!: boolean;
  protected onChange!: (value: boolean) => void;
  protected onTouched!: (value: any) => void;

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }




  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }




  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }




  protected onClick(checked: boolean): void {
    if (this.onChange)
      this.onChange(checked);
  }
}