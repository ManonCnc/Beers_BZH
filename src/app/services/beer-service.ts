
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Beer } from '../models/beer';
import { Observable} from 'rxjs';

    
@Injectable()    
export class BeerService {
    constructor(private http: HttpClient){}

    getBeers() : Observable<Beer[]> {
        return this.http.get<Beer[]>('https://api.punkapi.com/v2/beers');
    }

    getBeerById(id: string) : Observable<Beer[]>{
        const url = 'https://api.punkapi.com/v2/beers/' + id;
        return this.http.get<Beer[]>(url);
    }

    getBeerNext(id: string) : Observable<Beer[]>{
        const url = 'https://api.punkapi.com/v2/beers/' + (id+1);
        return this.http.get<Beer[]>(url);
    }

};