import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'window-title',
  standalone: true,
  imports: [],
  templateUrl: './window-title.component.html',
  styleUrl: './window-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowTitleComponent {

}
