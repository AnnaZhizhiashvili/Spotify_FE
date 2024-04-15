import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { BannerComponent } from '../shared/banner/banner.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { LocationService } from '../shared/services/location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [BannerComponent, SideBarComponent, HeaderComponent, FooterComponent, NgClass, RouterOutlet],
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
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

}
