import { Component, OnInit } from '@angular/core';
import { Beer } from '../models/beer';
import { BeerService } from '../services/beer-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  providers: [BeerService]
})
export class BeerDetailsComponent implements OnInit{

  beer!: Beer;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private beerService: BeerService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      param =>{
        this.getBeer(param['id'])
      }
    );
    
  }

  getBeer(id: string){
    this.beerService.getBeerById(id).subscribe((data) => 
      this.beer = data[0]
    );
  }

  goBack(): void {
    this.location.back();
  }


  nextBeer(): void {
    if(this.beer.id){
      let newId = this.beer.id + 1;
      this.router.navigate(['/details', newId]).then(nav => {
        if(this.beer.id){
           this.getBeer(newId);
        }
      }, err => {
        console.log(err) // when there's an error
      });
    }
    
  }
}
