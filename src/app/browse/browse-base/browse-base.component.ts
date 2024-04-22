import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../shared/components/inputs/search/search.component';

@Component({
  selector: 'app-browse-base',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent
  ],
  templateUrl: './browse-base.component.html',
  styleUrl: './browse-base.component.scss'
})
export class BrowseBaseComponent {

}
