import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Dropdown } from 'primeng/dropdown';
import { Store } from '@ngrx/store';
import { loadCurrency } from '../conversion.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss'],
})
export class ConversionComponent implements OnInit {
  options: any[] = [];
  currencyAmount: any;
  targetSelected: any;
  baseSelected: any;
  targetSelectedLabel: any;
  result: number = 0;
  fixed:any=0;

  currencies$: Observable<any[]> = this.store.select((state: any) => {
    return state.currencies.currencies;
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.currencies$.subscribe((res) => {
      this.options = res;
    });
  }

  submitted() {
    this.result =
      (this.currencyAmount / this.baseSelected.value) *
      this.targetSelected.value;
      this.fixed= this.result.toFixed(2);
    this.targetSelectedLabel = this.targetSelected.label;
  }
}
