import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularArtistsComponent } from './popular-artists/popular-artists.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

const routes: Routes = [
  {path: '', component: PopularArtistsComponent,},
  {path: ':id', component: ArtistDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PopularArtistsModule { }
