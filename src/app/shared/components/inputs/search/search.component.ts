import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputBaseComponent } from '../input.base.component';

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
export class SearchComponent extends InputBaseComponent {
  constructor() {
    super();
  }
}
