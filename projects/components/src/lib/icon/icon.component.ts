import { CommonModule } from '@angular/common';
import { booleanAttribute, Component, computed, input, Signal } from '@angular/core';
import { Color } from '../models/color';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  public color = input<Color>();
  public fill = input(false, { transform: booleanAttribute });
  public wght = input<number>(400);
  public grad = input<number>(0);
  public opsz = input<number>(24);
  public fontSize = input<number>(24);
  protected fontVariationSettings!: string;

  public ngOnInit(): void {
    const isFill: Signal<number> = computed(() => this.fill() ? 1 : 0);

    this.fontVariationSettings = `
    'FILL' ${isFill()},
    'wght' ${this.wght()},
    'GRAD' ${this.grad()},
    'opsz' ${this.opsz()}`;
  }
}