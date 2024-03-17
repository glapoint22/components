import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'window-title-bar',
  standalone: true,
  imports: [],
  templateUrl: './window-title-bar.component.html',
  styleUrl: './window-title-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowTitleBarComponent {

}
