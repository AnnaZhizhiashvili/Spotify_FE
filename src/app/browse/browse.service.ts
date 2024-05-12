import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { UtilitiesService } from '../shared/services/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient, private utilitiesService: UtilitiesService) { }

  getCategories(): Observable<any[]> {
    return this.http.get<{genres: []}>(`${environment.baseUrl}/genres`).pipe(
      map(categories => {
        return categories.genres.map(genre => {
          return {
            name: genre,
            color: this.utilitiesService.getRandomColor()
          }
        }).slice(0, 40)
      })
    );
  }
}
