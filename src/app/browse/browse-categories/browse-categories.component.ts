import { Component } from '@angular/core';
import { BrowseService } from '../browse.service';
import { AsyncPipe, NgStyle } from '@angular/common';
import { CapitalizeFirstPipe } from '../../shared/pipes/capitalize-first.pipe';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private browseService: BrowseService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  goToSpecificGenre(genre: string) {
    this.router.navigate(['./' + genre], {relativeTo: this.route}).then();
  }
}
