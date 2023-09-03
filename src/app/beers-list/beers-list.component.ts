import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer-service';
import { Beer } from '../models/beer';
import { DataViewLazyLoadEvent } from 'primeng/dataview';


@Component({
selector: 'app-beers-list',
templateUrl: './beers-list.component.html',
styleUrls: ['./beers-list.component.scss'],
providers: [BeerService]
})

export class BeersListComponent implements OnInit{

beers!: Beer[];
totalBeers!: number;
virtualBeers!: Beer[];


/** Paginator **/
first: number = 0;
rows: number = 12;

loading!: boolean;

constructor(private beerService: BeerService) {}

ngOnInit() {

  this.beerService.getBeers().subscribe((data) => (
    this.virtualBeers = data,
    this.totalBeers = data.length
  ));
}

loadData(event: DataViewLazyLoadEvent) {
  this.loading = true;
  setTimeout(() => {
    if (this.virtualBeers) {
      this.beers = this.virtualBeers.slice(event.first, (event.first + event.rows));
      this.loading = false;
    }
  }, 1000);
}
}
