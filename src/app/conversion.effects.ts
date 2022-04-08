import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, of, tap } from 'rxjs';
import { loadCurrencySucceed, loadCurrency, loadCurrencyError,} from './conversion.actions';
import { ConversionService } from './conversion.service';

@Injectable()
export class ConversionEffects {
  loadCurrency$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadCurrency),
      mergeMap((actions) =>{
        console.log("act", actions)
        return this.service.getlatestData(actions.data).pipe(
          // tap((data) => console.log('TAPPING', data.conversion_rates)),
          map((data) => loadCurrencySucceed({ currencies: data })),
          catchError(()=>of(loadCurrencyError()))
        );
      }
      )
    )
  );
  constructor(private action$: Actions, private service: ConversionService) {}
}
