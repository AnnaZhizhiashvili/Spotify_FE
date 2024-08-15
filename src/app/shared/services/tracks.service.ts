import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  // public tracksHistory = new BehaviorSubject<{ preview: string, index: number }[]>([]);
  public selectedTrackId = new BehaviorSubject<string>('');
  public trackSelected = signal({preview: '', id: ''})
  public trackSelected$ = new BehaviorSubject<any>({ preview: ''});
  public audioPlayPauseToggleClicked = new BehaviorSubject<boolean>(false);
  public isPlayerActive = signal(false);



  constructor(private http: HttpClient) { }

  getTrack(id: string): any {
    return this.http.get(`${environment.baseUrl}/track/${id}`).pipe(
      shareReplay(1)
    )
  }
}
