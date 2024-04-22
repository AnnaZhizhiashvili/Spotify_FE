import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SearchComponent } from '../inputs/search/search.component';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SearchComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() searchFormControl = new FormControl();
  @Output() onBackClick = new EventEmitter();
  @Output() onForwardClick = new EventEmitter();
  showSearchComponent = false;
  searchValue = '';
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
        this.showSearchComponent  = this.router.url.includes('/search');
    });
  }

}
