import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  artists = [
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/1"
      },
      followers: {
        href: null,
        total: 10000
      },
      genres: ["Pop", "Rock"],
      href: "https://api.spotify.com/v1/artists/1",
      id: "1",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 640,
          width: 640
        }
      ],
      name: "Artist 1",
      popularity: 80,
      type: "artist",
      uri: "spotify:artist:1"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/2"
      },
      followers: {
        href: null,
        total: 15000
      },
      genres: ["Electronic", "Dance"],
      href: "https://api.spotify.com/v1/artists/2",
      id: "2",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 300,
          width: 300
        }
      ],
      name: "Artist 2",
      popularity: 70,
      type: "artist",
      uri: "spotify:artist:2"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3"
      },
      followers: {
        href: null,
        total: 5000
      },
      genres: ["Hip Hop", "Rap"],
      href: "https://api.spotify.com/v1/artists/3",
      id: "3",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 480,
          width: 480
        }
      ],
      name: "Artist 3",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:3"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3"
      },
      followers: {
        href: null,
        total: 5000
      },
      genres: ["Hip Hop", "Rap"],
      href: "https://api.spotify.com/v1/artists/3",
      id: "3",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 480,
          width: 480
        }
      ],
      name: "Artist 4",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:3"
    },
    {
      external_urls: {
        spotify: "https://open.spotify.com/artist/3"
      },
      followers: {
        href: null,
        total: 5000
      },
      genres: ["Hip Hop", "Rap"],
      href: "https://api.spotify.com/v1/artists/3",
      id: "3",
      images: [
        {
          url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
          height: 480,
          width: 480
        }
      ],
      name: "Artist 5",
      popularity: 85,
      type: "artist",
      uri: "spotify:artist:3"
    }
  ]

  constructor(private http: HttpClient) { }
  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/artists`)
  }

  getArtistTracks(id: string): Observable<any> {
    return this.http.get<any[]>(`${environment.baseUrl}/artist/${id}/tracks`)
  }


}
