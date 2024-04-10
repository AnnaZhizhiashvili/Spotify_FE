import { Component, OnInit } from '@angular/core';
import { ArtistItemComponent } from '../artist-item/artist-item.component';
import { ArtistsService } from '../artists.service';
import { AsyncPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-popular-artists',
  standalone: true,
  imports: [
    ArtistItemComponent,
    AsyncPipe,
    NgClass
  ],
  templateUrl: './popular-artists.component.html',
  styleUrl: './popular-artists.component.scss'
})
export class PopularArtistsComponent implements OnInit {
    showAll = false;
    artists$ = this.artistsService.getArtists();
    constructor(private artistsService: ArtistsService) {

    }
    ngOnInit() {
      this.artists$.subscribe(a => {
        console.log(a)
      })
    }
}
