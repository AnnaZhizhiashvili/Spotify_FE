import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, refCount, shareReplay, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  artists: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  tracks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // playlists: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // shows: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // episodes: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  // audiobooks: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  albums: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  searchDataAvailable = new BehaviorSubject(false)

  constructor(private http: HttpClient) { }
  search(keyWord: string, type?: any): Observable<any> {
    const params: any = { q: keyWord };
    if (type) {
      params.type = type;
    }
    return this.http.get<any>(`${environment.baseUrl}/search`, { params: params }).pipe(
      tap(data => {
        this.artists.next(data.artists.items);
        this.tracks.next(data.tracks.items);
        // this.playlists.next(data.playlists.items);
        // this.shows.next(data.shows.items);
        // this.episodes.next(data.episodes.items);
        // this.audiobooks.next(data.audiobooks.items);
        this.albums.next(data.albums.items);
        this.searchDataAvailable.next(true)
      }),
      shareReplay()
    )
  }
}
