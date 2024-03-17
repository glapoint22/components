import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'window-content',
  standalone: true,
  imports: [],
  templateUrl: './window-content.component.html',
  styleUrl: './window-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowContentComponent {

}
