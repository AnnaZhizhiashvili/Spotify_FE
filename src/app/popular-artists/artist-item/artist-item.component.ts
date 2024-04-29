import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ItemComponent } from '../../shared/components/item/item.component';

@Component({
  selector: 'app-artist-item',
  standalone: true,
  imports: [
    RouterLink,
    ItemComponent
  ],
  templateUrl: './artist-item.component.html',
  styleUrl: './artist-item.component.scss'
})
export class ArtistItemComponent {
  @Input() artist: any;
    constructor(private router: Router) {
  }
  navigateToArtist(id: string) {
    console.log(id)
    this.router.navigate(['/artists', id]).then()
  }
}
