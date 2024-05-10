import { Component } from '@angular/core';
import { BrowseService } from '../browse.service';
import { AsyncPipe, NgStyle } from '@angular/common';
import { UtilitiesService } from '../../shared/services/utilities.service';
import { CapitalizeFirstPipe } from '../../shared/pipes/capitalize-first.pipe';
import { SearchService } from '../../shared/services/search.service';

@Component({
  selector: 'app-browse-categories',
  standalone: true,
  imports: [
    AsyncPipe,
    NgStyle,
    CapitalizeFirstPipe
  ],
  templateUrl: './browse-categories.component.html',
  styleUrl: './browse-categories.component.scss'
})
export class BrowseCategoriesComponent {
  categories$ = this.browseService.getCategories();
  constructor(private browseService: BrowseService, private searchService: SearchService) { }

  goToSpecificGenre(genre: string) {
    this.searchService.search(genre).subscribe()
  }
}
