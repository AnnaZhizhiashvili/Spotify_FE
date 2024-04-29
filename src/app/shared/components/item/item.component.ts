import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit {
  @Input() item: any;
  @Input() type: 'artists' | 'tracks' | 'playlists' |'shows' | 'episodes' | 'audiobooks' | 'albums';
  constructor(private router: Router) {
  }
  navigateToArtist(id: string) {
    this.router.navigate([`${this.type}`, id]).then()
  }
  ngOnInit(): void {
    console.log(this.item)
  }


}
