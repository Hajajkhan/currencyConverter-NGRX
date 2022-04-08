import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-latest-rates',
  templateUrl: './latest-rates.component.html',
  styleUrls: ['./latest-rates.component.scss']
})

export class LatestRatesComponent implements OnInit {
  options:any[]=[];
  array:any[]=[];

  currencies$: Observable<any[]> = this.store.select((state: any) => {
    return state.currencies.currencies;
  });
  
  constructor(private store:Store){}

  ngOnInit(): void {
    this.currencies$.subscribe(res=>{
      this.array=res;
    });
  }
}
