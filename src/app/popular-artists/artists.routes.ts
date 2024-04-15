import { Routes } from '@angular/router';
import { PopularArtistsComponent } from './popular-artists/popular-artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

export const ARTISTS_ROUTES: Routes = [
  {path: '', component: PopularArtistsComponent},
  {path: ':id', component: ArtistDetailsComponent },
];
