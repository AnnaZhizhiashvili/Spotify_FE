import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { ArtistsService } from '../artists.service';

@Component({
  selector: 'app-artist-details',
  standalone: true,
  imports: [],
  templateUrl: './artist-details.component.html',
  styleUrl: './artist-details.component.scss'
})
export class ArtistDetailsComponent {
  artist: any;
  constructor(private route: ActivatedRoute, private artistService: ArtistsService) {
  }
  ngOnInit() {
    this.route.params.pipe(
      switchMap(params => this.artistService.getArtist(params['id']))
      ).subscribe(artist => {
        this.artist = artist;
      console.log(this.artist)
      }
    )
  }

}
