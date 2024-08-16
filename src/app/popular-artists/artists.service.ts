import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, map, Observable, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Track, TracksList } from '../apis/track.interface';
import { Artist } from '../apis/artist.interface';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  public artistsTracks$ = new BehaviorSubject<Track[]>([]);
  public artistsTracksSignal = signal<Track[]>([]);

  constructor(private http: HttpClient) { }
  getArtists(): Observable<any[]> {
    return this.http.get<Artist[]>(`${environment.baseUrl}/artists`).pipe(
      shareReplay(1)
    )
  }

  getArtistTracks(id: number): Observable<Track[]> {
    return this.http.get<TracksList>(`${environment.baseUrl}/artist/${id}/tracks`).pipe(
      map(tracks => {
        let orderId = 0;
        const tracksData = tracks.data.map(track => ({...track, orderId: ++orderId}));
        this.artistsTracks$.next(tracksData) // Emitting tracks to the signal
        this.artistsTracksSignal.set(tracksData) // Emitting tracks to the signal
        return tracksData
      }),
      shareReplay(1)
    )
  }

  // Deezer Artist
  getArtist(id: string): Observable<any> {
    return this.http.get<Artist>(`${environment.baseUrl}/artist/${id}`).pipe(
      shareReplay(1)
    )
  }


}
