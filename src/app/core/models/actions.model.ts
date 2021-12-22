import { Action } from '@ngrx/store';

export interface CustomAction extends Action {
  payload: any;
}
