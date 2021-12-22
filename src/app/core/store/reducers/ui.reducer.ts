import { createReducer, on } from '@ngrx/store';
import { CustomAction } from '../../models/actions.model';
import { changeTheme } from '../actions/ui.actions';

const initialState = {
  isLightTheme: false,
};

export const uiReducer = createReducer(
  initialState,
  on(changeTheme, (state, action: CustomAction) => ({
    ...state,
    isLightTheme: action.payload,
  }))
);
