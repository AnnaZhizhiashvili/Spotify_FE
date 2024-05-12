import { Component, OnInit } from '@angular/core';
import { ArtistItemComponent } from '../../popular-artists/artist-item/artist-item.component';
import { AsyncPipe } from '@angular/common';
import { ItemComponent } from '../../shared/components/item/item.component';
import { SearchService } from '../../shared/services/search.service';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-browse-items',
  standalone: true,
  imports: [
    ArtistItemComponent,
    AsyncPipe,
    ItemComponent
  ],
  templateUrl: './browse-items.component.html',
  styleUrl: './browse-items.component.scss'
})
export class BrowseItemsComponent implements OnInit {
  artists$ = this.searchService.artists.asObservable();
  albums$ = this.searchService.albums.asObservable();
  tracks$ = this.searchService.tracks.asObservable();

  constructor(
    private searchService: SearchService,
    private utilitiesService: UtilitiesService,
    private route: ActivatedRoute,
  ) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const searchId = params.get('id');
      if (searchId) {
        this.searchService.search(searchId).pipe(
          debounceTime(300),
          distinctUntilChanged(),
          debounceTime(3000)
        ).subscribe();
      }
    })
  }
  getFullYear(date: string) {
    return this.utilitiesService.getFullYear(date);
  }

}
