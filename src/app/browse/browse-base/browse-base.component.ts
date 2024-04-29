import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../../shared/components/inputs/search/search.component';
import { BrowseComponent } from '../browse/browse.component';

@Component({
  selector: 'app-browse-base',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    BrowseComponent
  ],
  templateUrl: './browse-base.component.html',
  styleUrl: './browse-base.component.scss'
})
export class BrowseBaseComponent {

}
