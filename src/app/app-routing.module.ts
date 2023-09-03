import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';

const routes: Routes = [
  {
    path: '',
    component: BeersListComponent,
    title: 'Beers BZH'
  },
  {
    path: 'details/:id',
    component: BeerDetailsComponent,
    title: 'Details Beer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
