import { Component, HostListener, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { BannerComponent } from '../shared/components/banner/banner.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { LocationService } from '../shared/services/location.service';
import { NgxAudioPlayerModule, Track } from '@khajegan/ngx-audio-player';
import { CustomAudioPlayerComponent } from '../shared/components/custom-audio-player/custom-audio-player.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [BannerComponent, SideBarComponent, HeaderComponent, FooterComponent, NgClass, RouterOutlet, NgxAudioPlayerModule, CustomAudioPlayerComponent],
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  fade: boolean = false;
  isTransparent = true;
  currentPosition = window.pageYOffset;
  constructor(private locationService: LocationService) { }
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
ngOnInit() {


}
}
