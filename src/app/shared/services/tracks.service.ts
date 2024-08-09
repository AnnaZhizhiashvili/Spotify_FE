import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  public selectedTrack = new BehaviorSubject<string>('');
  public tracksHistory = new BehaviorSubject<{ preview_url: string, index: number }[]>([]);

  constructor(private http: HttpClient) { }

  getTrack(id: string): any {
    return this.http.get(`${environment.baseUrl}/track/${id}`);
  }
}
