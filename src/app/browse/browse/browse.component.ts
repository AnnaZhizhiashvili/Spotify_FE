import { Component } from '@angular/core';
import { SearchService } from '../../shared/services/search.service';
import { ArtistItemComponent } from '../../popular-artists/artist-item/artist-item.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { ItemComponent } from '../../shared/components/item/item.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    ArtistItemComponent,
    AsyncPipe,
    NgClass,
    ItemComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  artists$ = this.searchService.artists.asObservable();
  albums$ = this.searchService.albums.asObservable();
  tracks$ = this.searchService.tracks.asObservable();
  audiobooks$ = this.searchService.audiobooks.asObservable();
  playlists$ = this.searchService.playlists.asObservable();
  episodes$ = this.searchService.episodes.asObservable();

  constructor(private searchService: SearchService) {
  }

}
