import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArtistsService } from '../artists.service';
import { TracksListComponent } from '../../shared/components/tracks-list/tracks-list.component';
import { TracksService } from '../../shared/services/tracks.service';

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
  tracks = signal<any>(null);
  isPlayerActiveSignal = this.tracksService.isPlayerActive;
  constructor(private route: ActivatedRoute, private artistService: ArtistsService, private tracksService: TracksService) {
  }
  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.artistService.getArtistTracks(params['id']))
      ).subscribe(artist => {
        this.tracks.set(artist);
      });
  }

  onTrackSelect(id: string) {
    if(id === this.tracksService.trackSelected().id) {
      this.tracksService.audioPlayPauseToggleClicked.next(true);
      this.isPlayerActiveSignal.set(!this.tracksService.isPlayerActive());
    } else {
      this.tracksService.selectedTrackId.next(id);
      this.isPlayerActiveSignal.set(true);
    }
  }

}
