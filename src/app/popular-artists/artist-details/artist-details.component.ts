import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArtistsService } from '../artists.service';
import { TracksListComponent } from '../../shared/components/tracks-list/tracks-list.component';

@Component({
  selector: 'app-artist-details',
  standalone: true,
  imports: [
    TracksListComponent
  ],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.scss'
})
export class ArtistDetailsComponent implements OnInit {
  artist = history.state.item;
  tracks = signal<any>(null)
  constructor(private route: ActivatedRoute, private artistService: ArtistsService, private router: Router) {
  }
  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.artistService.getArtistTracks(params['id']))
      ).subscribe(artist => {
        this.tracks.set(artist);
      }
    )
  }

}
