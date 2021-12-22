import { createAction, props } from '@ngrx/store';

export const changeTheme = createAction(
  '[Slide Toggle] Change App Theme',
  props<{ payload: boolean }>()
);
