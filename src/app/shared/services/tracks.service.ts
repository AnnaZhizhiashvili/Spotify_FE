import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  public selectedTrack = signal<string>('');

  constructor(private http: HttpClient) { }

  getTrack(id: string): any {
    return this.http.get(`${environment.baseUrl}/track/${id}`);
  }
}
