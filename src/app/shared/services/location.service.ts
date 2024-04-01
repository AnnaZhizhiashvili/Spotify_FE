import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private location: Location) {
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }
}
