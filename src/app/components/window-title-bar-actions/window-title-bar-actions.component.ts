import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'window-title-bar-actions',
  standalone: true,
  imports: [],
  templateUrl: './window-title-bar-actions.component.html',
  styleUrl: './window-title-bar-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WindowTitleBarActionsComponent {

}
