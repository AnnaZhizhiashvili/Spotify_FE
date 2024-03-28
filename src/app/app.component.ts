import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fade: boolean = false;
  scrollDirection: 'up' | 'down';
  currentPosition = window.pageYOffset;


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event: any) {
    let scroll = window.pageYOffset;
    if (scroll > this.currentPosition) {
        this.fade = true;
        setTimeout(() => {
          this.fade = false;
        }, 1000);
      }
    this.currentPosition = scroll;
  }
}
