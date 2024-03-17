import { ChangeDetectionStrategy, Component, ComponentRef, HostListener } from '@angular/core';
import { ButtonDirective } from '../../directives/button/button.directive';
import { IconButtonDirective } from '../../directives/icon-button/icon-button.directive';
import { BackdropComponent } from '../backdrop/backdrop.component';
import { IconComponent } from '../icon/icon.component';
import { WindowActionsComponent } from '../window-actions/window-actions.component';
import { WindowContentComponent } from '../window-content/window-content.component';
import { WindowTitleBarActionsComponent } from '../window-title-bar-actions/window-title-bar-actions.component';
import { WindowTitleBarComponent } from '../window-title-bar/window-title-bar.component';
import { WindowTitleComponent } from '../window-title/window-title.component';
import { WindowComponent } from '../window/window.component';
import { DialogBoxButton } from '../../models/dialog-box-button';

@Component({
  selector: 'dialog-box',
  standalone: true,
  imports: [
    IconComponent,
    ButtonDirective,
    IconButtonDirective,
    BackdropComponent,
    WindowComponent,
    WindowTitleBarComponent,
    WindowTitleComponent,
    WindowTitleBarActionsComponent,
    WindowContentComponent,
    WindowActionsComponent
  ],
  templateUrl: './dialog-box.component.html',
  styleUrl: './dialog-box.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogBoxComponent {
  protected title!: string;
  protected message!: string;
  protected buttons: Array<DialogBoxButton> | undefined;
  private dialogComponentRef!: ComponentRef<DialogBoxComponent>;

  public set(dialogComponentRef: ComponentRef<DialogBoxComponent>, title: string, message: string, buttons?: Array<DialogBoxButton>) {
    this.title = title;
    this.message = message;
    this.buttons = buttons;
    this.dialogComponentRef = dialogComponentRef;
  }

  protected close() {
    this.dialogComponentRef.destroy();
  }


  @HostListener('document:keydown.escape')
  protected onKeyPress(): void {
    this.close();
  }
}