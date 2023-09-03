import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeersListComponent } from '../beers-list/beers-list.component';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';


import { DataViewModule } from 'primeng/dataview';
import { PrimeNGModule } from './utils/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { SliderModule } from 'primeng/slider';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TreeTableModule } from 'primeng/treetable';
import { KeyFilterModule } from 'primeng/keyfilter';
import { CardModule } from 'primeng/card';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    BeersListComponent,
    BeerDetailsComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeNGModule,
    DataViewModule,
    PaginatorModule,
    InputTextModule,
    TableModule,
    MultiSelectModule,
    ButtonModule,
    ProgressBarModule,
    DialogModule,
    DropdownModule,
    AutoCompleteModule,
    SliderModule,
    InputTextareaModule,
    TreeTableModule,
    KeyFilterModule,
    RouterLink,
    RouterOutlet,
    CardModule
  ],
  exports: [
    BeersListComponent,
    BeerDetailsComponent,
    BreadcrumbComponent
  ]
})
export class SharedModule { }
