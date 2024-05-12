import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputBaseComponent } from '../input.base.component';
import { SearchService } from '../../../services/search.service';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrls: ['../input.base.component.scss', './search.component.scss']
})
export class SearchComponent extends InputBaseComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {
    super();
  }
  ngOnInit() {
    this.formControl.valueChanges.pipe(
      debounceTime(300),
    ).subscribe(value => {
      if (!value) {
        this.searchService.searchDataAvailable.next(false);
      } else {
        this.searchService.searchDataAvailable.next(true);
      }
      this.router.navigate([`/search/${value}`]).then();
    })
  }


}
