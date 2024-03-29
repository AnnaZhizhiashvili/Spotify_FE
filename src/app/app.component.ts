import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fade: boolean = false;
  isTransparent = true;
  currentPosition = window.pageYOffset;


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event: any) {

    let scroll = window.pageYOffset;
    console.log(this.currentPosition, "currentPosition");
    console.log(scroll, "scroll");
    if (scroll > this.currentPosition && this.currentPosition === 0) {
        this.fade = true;
        setTimeout(() => {
          this.fade = false;
        }, 1000);
      }
    this.currentPosition = scroll;
    this.isTransparent = this.currentPosition <= 10;
  }
}
