import { createAction, props } from '@ngrx/store';

export const loadCurrency = createAction('[ConversionComponent] load currency', props<any>());
export const loadCurrencySucceed = createAction(
  '[ConversionComponent] load currency succeed',
  props<any>()
);
export const loadCurrencyError = createAction('[ConversionComponent] loading failed');