import { Component, OnInit } from '@angular/core';
import { ArtistItemComponent } from '../../popular-artists/artist-item/artist-item.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { ItemComponent } from '../../shared/components/item/item.component';
import { BrowseCategoriesComponent } from '../browse-categories/browse-categories.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [
    ArtistItemComponent,
    AsyncPipe,
    NgClass,
    ItemComponent,
    BrowseCategoriesComponent
  ],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent implements OnInit {
  // audiobooks$ = this.searchService.audiobooks.asObservable();
  // playlists$ = this.searchService.playlists.asObservable();
  // episodes$ = this.searchService.episodes.asObservable();

  constructor() {
  }



  ngOnInit(): void {
  }

}
