import { Component } from '@angular/core';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CheckboxChange } from './models/checkbox-change';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RadioButtonComponent,
    RadioGroupComponent,
    CheckboxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  onChange(value: CheckboxChange) {
    console.log(value.checked)
  }
  protected isDisabled!: boolean;


  onClick() {
    this.isDisabled = !this.isDisabled;
  }
}
