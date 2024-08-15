import { Component, OnInit } from '@angular/core';
import { ArtistItemComponent } from '../artist-item/artist-item.component';
import { ArtistsService } from '../artists.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
    constructor(private router: Router, private artistsService: ArtistsService, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
        // Check if 'showAll' query parameter exists and set the state accordingly
        this.showAll = params['all'] === 'true';
      });

      this.artistsService.getArtist('1424821').subscribe((artists) => {})
    }



  setShowAllState(state: boolean) {
    this.showAll = state;
    // Update the URL with the new state of 'showAll'
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { all: state },
      queryParamsHandling: 'merge', // Merge with existing query parameters
    }).then();
  }
}
