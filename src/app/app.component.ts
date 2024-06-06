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
import { async } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [BannerComponent, SideBarComponent, HeaderComponent, FooterComponent, NgClass, RouterOutlet, CustomAudioPlayerComponent, AsyncPipe],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  private tracksService = inject(TracksService);
  selectedTrack = signal<any>(null)
  fade: boolean = false;
  isTransparent = true;
  currentPosition = window.pageYOffset;
  searchFormControl = new FormControl();

  constructor(private locationService: LocationService, private searchService: SearchService) {
    effect(d => {
      this.tracksService.getTrack(this.tracksService.selectedTrack()).subscribe((track: any) => {
        console.log(track.tracks.items[0])
        this.selectedTrack.set(track.tracks.items[0]);
      })
    })
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

  goBack() {
    this.locationService.goBack();
  }

  goForward() {
    this.locationService.goForward();
  }

  ngOnInit(): void {

  }


}
