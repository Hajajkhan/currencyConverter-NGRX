import { createReducer, on } from '@ngrx/store';
import { Currency } from './currency.state';
import {
  loadCurrency,
  loadCurrencyError,
  loadCurrencySucceed,
} from './conversion.actions';

interface Applicationstate {
  currencies: any[];
}
const initialstate: Applicationstate = {
  currencies: [],
};

const _currencyReducer = createReducer(
  initialstate,
  on(loadCurrencySucceed, (state, { currencies }) => {
    const currenciesObject = currencies.conversion_rates;
    const arrayOfObjects = [];
    for (const [keys, values] of Object.entries(currenciesObject)) {
      const updatedObject = { label: keys, value: values };
      arrayOfObjects.push(updatedObject);
    }
    return { ...state, currencies: arrayOfObjects };
  }),
  on(loadCurrencyError, (state: any, action: any) => {
    console.log('failing', state);
    return state;
  })
);

export function currencyReducer(state: any, action: any) {
  return _currencyReducer(state, action);
}
