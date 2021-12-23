import { createReducer, on } from '@ngrx/store';
import { CustomAction } from '../../models/actions.model';
import { AppInitialState } from '../../models/app.state.model';
import {
  addDeveloper,
  getSearch,
  getSearchFail,
  getSearchSuccess,
} from '../actions/app.action';

const initialState: AppInitialState = {
  loading: false,
  user: null,
  developers: [],
};

export const appReducer = createReducer(
  initialState,
  on(getSearch, (state, action) => ({
    ...state,
    loading: true,
  })),

  on(getSearchSuccess, (state, action: CustomAction) => ({
    ...state,
    loading: false,
    user: action.payload,
  })),

  on(getSearchFail, (state, action) => ({
    ...state,
    loading: false,
  })),

  on(addDeveloper, (state, action) => ({
    ...state,
    developers: [...state.developers, action.payload],
  }))
);
