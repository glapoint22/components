import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'window',
  standalone: true,
  imports: [],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WindowComponent {

}
