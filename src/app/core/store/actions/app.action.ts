import { createAction, props } from '@ngrx/store';
import { User } from '../../../core/models/user.model';

export const getSearch = createAction(
  '[Search Input] Get Search',
  props<{ payload: string }>()
);

export const getSearchSuccess = createAction(
  '[Effect] Get Search Success',
  props<{ payload: User }>()
);

export const getSearchFail = createAction('[Effect] Get Search Fail');
