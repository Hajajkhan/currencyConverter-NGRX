import { Component, OnInit } from '@angular/core';
import { SelectItem, MenuItem } from 'primeng/api';
import { ConversionService } from '../conversion.service';
import { Store } from '@ngrx/store';
import { loadCurrency } from '../conversion.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  targetSelected: any;
  options: SelectItem[] = [];
  items: MenuItem[] = [];
  disabled = false;
  btnDisabled = true;

  currencies$: Observable<any[]> = this.store.select((state: any) => {
    return state.currencies.currencies;
  });

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCurrency(null));

    this.currencies$.subscribe((res) => {
      Object.values(res).forEach((keys) => {
        const object = { label: keys.label, value: keys.value };
        this.options.push(object);
      });
    });

    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      {
        label: 'PriceList',
        icon: 'pi pi-fw pi-file',
        routerLink: 'latestrates',
      },
    ];
  }

  onChange() {
    this.store.dispatch(loadCurrency({ data: this.targetSelected.label }));
  }
}
