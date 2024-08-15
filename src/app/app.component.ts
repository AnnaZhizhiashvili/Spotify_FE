import { Component, computed, effect, HostListener, inject, OnInit, signal } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { FormControl } from '@angular/forms';
import { SearchService } from './shared/services/search.service';
import { CustomAudioPlayerComponent } from './shared/components/custom-audio-player/custom-audio-player.component';
import { TracksService } from './shared/services/tracks.service';
import {  BehaviorSubject, concatMap, filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [BannerComponent, SideBarComponent, HeaderComponent, FooterComponent, NgClass, RouterOutlet, CustomAudioPlayerComponent, AsyncPipe],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private tracksService = inject(TracksService);
  selectedTrack$ = this.tracksService.trackSelected$;
  fade: boolean = false;
  isTransparent = true;
  currentPosition = window.pageYOffset;
  searchFormControl = new FormControl();

  constructor(private locationService: LocationService, private searchService: SearchService) {

  }
  @HostListener('window:scroll', ['$event'])
    scrollHandler(event: any) {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition && this.currentPosition === 0) {
        this.fade = true;
        setTimeout(() => {
          this.fade = false;
        }, 1000);
      }
    this.currentPosition = scroll;
    this.isTransparent = this.currentPosition <= 10;
  }
  ngOnInit(): void {
    this.tracksService.selectedTrackId.pipe(
      filter(trackId => !!trackId),
      concatMap((trackId: string) => this.tracksService.getTrack(trackId)),
      tap((track: any) => {
        // const tracksHistory = this.tracksService.tracksHistory.getValue();
        // const newHistoryItem = {preview: track.preview, index: tracksHistory.length + 1, timestamp: new Date()  };
        // this.tracksService.tracksHistory.next([...tracksHistory, newHistoryItem]);
        this.tracksService.trackSelected$.next(track);
        this.tracksService.trackSelected.set(track);
      })
    ).subscribe()
  }
  goBack() {
    this.locationService.goBack();
  }

  goForward() {
    this.locationService.goForward();
  }


}
