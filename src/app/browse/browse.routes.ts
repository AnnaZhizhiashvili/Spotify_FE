import { Routes } from '@angular/router';
import { BrowseBaseComponent } from './browse-base/browse-base.component';
import { BrowseItemsComponent } from './browse-items/browse-items.component';

export const BROWSE_ROUTES: Routes = [
  {path: '', component: BrowseBaseComponent},
  {path: ':id', component: BrowseItemsComponent}
];
