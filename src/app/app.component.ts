import { Component, ViewContainerRef, inject } from '@angular/core';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { IconComponent } from './components/icon/icon.component';
import { ButtonDirective } from './directives/button/button.directive';
import { IconButtonDirective } from './directives/icon-button/icon-button.directive';
import { DynamicComponentService } from './services/dynamic-component.service';
import { DialogBoxButton } from './models/dialog-box-button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RadioButtonComponent,
    RadioGroupComponent,
    CheckboxComponent,
    IconComponent,
    ButtonDirective,
    IconButtonDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef = inject(ViewContainerRef);
  private dynamicComponentService = inject(DynamicComponentService);

  ngOnInit() {
    this.dynamicComponentService.setContainerRef(this.viewContainerRef);
  }

  openDialog() {
    this.dynamicComponentService.openDialogBox('Delete File', 'Are you sure you want to delete this file?', [
      DialogBoxButton.create('Cancel'),
      DialogBoxButton.create('Delete', () => console.log('Delete'), 'primary')
    ]);
  }
}