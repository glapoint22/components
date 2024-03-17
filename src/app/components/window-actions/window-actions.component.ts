import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'window-actions',
  standalone: true,
  imports: [],
  templateUrl: './window-actions.component.html',
  styleUrl: './window-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class WindowActionsComponent {

}
