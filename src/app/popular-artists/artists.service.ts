import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }
  getArtists(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/artists`).pipe(
      shareReplay(1)
    )
  }

  getArtistTracks(id: string): Observable<any> {
    return this.http.get<{data: []}>(`${environment.baseUrl}/artist/${id}/tracks`).pipe(
      map(tracks => tracks.data),
      shareReplay(1)
    )
  }

  // Deezer Artist
  getArtist(id: string): Observable<any> {
    return this.http.get<any[]>(`${environment.baseUrl}/artist/${id}`).pipe(
      shareReplay(1)
    )
  }


}
