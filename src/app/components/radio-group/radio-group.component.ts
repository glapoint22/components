import { ChangeDetectionStrategy, Component, OnChanges, OnInit, contentChildren, input, output } from '@angular/core';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

@Component({
  selector: 'radio-group',
  standalone: true,
  imports: [],
  templateUrl: './radio-group.component.html',
  styleUrl: './radio-group.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RadioGroupComponent implements OnInit, OnChanges {
  public onChange = output<any>();
  public disabled = input<boolean>(false);
  public color = input<'primary' | 'secondary'>('primary');
  public name = input<string>('radio');
  private children = contentChildren<RadioButtonComponent>(RadioButtonComponent);


  public ngOnInit(): void {
    if (!this.children() || this.children().length === 0) return;

    this.children().forEach((radioButton: RadioButtonComponent) => {
      radioButton.onChange.subscribe((value: any) => this.onChange.emit(value));
    });
  }



  public ngOnChanges(): void {
    if (!this.children() || this.children().length === 0) return;

    this.children().forEach((radioButton: RadioButtonComponent) => {
      this.setChild(radioButton);
    });
  }



  protected setChild(radioButton: RadioButtonComponent): void {
    if (radioButton.disabled() !== this.disabled()) radioButton.disabled.set(this.disabled());
    if (radioButton.name() !== this.name()) radioButton.name.set(this.name());
    if (radioButton.color() !== this.color()) radioButton.color.set(this.color());
  }
}