import { Component } from '@angular/core';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonDirective } from './directives/button/button.directive';
import { IconButtonDirective } from './directives/icon-button/icon-button.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RadioButtonComponent,
    RadioGroupComponent,
    CheckboxComponent,
    IconComponent,
    ButtonDirective,
    IconButtonDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 }