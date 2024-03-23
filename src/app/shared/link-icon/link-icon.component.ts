import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link-icon',
  standalone: true,
  imports: [],
  templateUrl: './link-icon.component.html',
  styleUrl: './link-icon.component.scss'
})
export class LinkIconComponent {
  @Input() url: string;
}
