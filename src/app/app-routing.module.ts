import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularArtistsModule } from './popular-artists/popular-artists.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', loadChildren: () => import('./popular-artists/popular-artists.module').then(m => m.PopularArtistsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
