import { Component } from '@angular/core';
import { ArtistItemComponent } from '../artist-item/artist-item.component';
import { ArtistsService } from '../artists.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-popular-artists',
  standalone: true,
  imports: [
    ArtistItemComponent,
    AsyncPipe
  ],
  templateUrl: './popular-artists.component.html',
  styleUrl: './popular-artists.component.scss'
})
export class PopularArtistsComponent {
    artists$ = this.artistsService.getArtists();
    constructor(private artistsService: ArtistsService) {

    }
}
