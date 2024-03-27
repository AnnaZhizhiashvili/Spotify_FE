import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count = 0;
  fade: boolean = false;


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event: any) {
    if(this.count === 0){
      console.log(event)
      this.fade = true;
      setTimeout(() => {
        this.fade = false;
        this.count++
      }, 2000);
     }
    }


}
