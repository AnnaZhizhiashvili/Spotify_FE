import { Component, HostListener } from '@angular/core';
import { LocationService } from './shared/services/location.service';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BannerComponent } from './shared/components/banner/banner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [BannerComponent, SideBarComponent, HeaderComponent, FooterComponent, NgClass, RouterOutlet],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
