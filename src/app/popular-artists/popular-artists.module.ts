import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PopularArtistsComponent } from './popular-artists/popular-artists.component';

const routes: Routes = [{
  path: '', pathMatch: 'full', component: PopularArtistsComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PopularArtistsModule { }
