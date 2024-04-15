import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './app/auth/login/login.component';
import { HomeComponent } from './app/home/home.component';
import { PopularArtistsComponent } from './app/popular-artists/popular-artists/popular-artists.component';



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {path: '', pathMatch: 'full', redirectTo: 'home'},
        {path: 'home', component: HomeComponent, children: [
            {path: '', pathMatch: 'full', component: PopularArtistsComponent},
          ]},
        {path: 'login', component: LoginComponent},
        {path: 'artists',
          loadChildren: () => import('./app/popular-artists/artists.routes').then(r => r.ARTISTS_ROUTES)
        }
      ]
      )
  ]
}).then()
