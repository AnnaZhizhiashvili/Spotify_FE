import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(keyWord: string, type = 'artist'): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/search`, {params: {q: keyWord, type: type }})
  }
}
