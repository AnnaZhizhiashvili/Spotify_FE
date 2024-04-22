import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/auth/login/login.component';
import { HomeComponent } from './app/popular-artists/home/home.component';
import { PopularArtistsComponent } from './app/popular-artists/popular-artists/popular-artists.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(
      [
        {path: '', pathMatch: 'full', redirectTo: 'artists'},
        {path: 'artists',
          loadChildren: () => import('./app/popular-artists/artists.routes').then(r => r.ARTISTS_ROUTES)
        },
        {path: 'search',
          loadChildren: () => import('./app/browse/browse.routes').then(r => r.BROWSE_ROUTES)
        },
        {path: 'login', component: LoginComponent},
      ]
      ), provideAnimationsAsync()
  ]
}).then()
