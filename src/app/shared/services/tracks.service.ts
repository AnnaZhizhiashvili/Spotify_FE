import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { Track } from '../../apis/track.interface';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  // public tracksHistory = new BehaviorSubject<{ preview: string, index: number }[]>([]);
  public selectedTrackId = new BehaviorSubject<number | null>(null);
  public trackSelected = signal<Track | null>(null)
  public selectedTrackOrderId = signal<number>(-1);
  public trackSelected$ = new BehaviorSubject<Track | null>(null);
  public audioPlayPauseToggleClicked$ = new BehaviorSubject<boolean>(false);
  public isPlayerActive = signal(false);



  constructor(private http: HttpClient) { }

  getTrack(id: string): Observable<Track> {
    return this.http.get<Track>(`${environment.baseUrl}/track/${id}`).pipe(
      shareReplay(1)
    )
  }
}
