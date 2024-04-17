import { Component } from '@angular/core';
import { LinkIconComponent } from '../link-icon/link-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LinkIconComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
