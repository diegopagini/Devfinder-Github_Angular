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
  notFound: false,
};

export const appReducer = createReducer(
  initialState,
  on(getSearch, (state, action) => ({
    ...state,
    loading: true,
    notFound: false,
  })),

  on(getSearchSuccess, (state, action: CustomAction) => ({
    ...state,
    loading: false,
    user: action.payload,
    notFound: false,
  })),

  on(getSearchFail, (state, action) => ({
    ...state,
    loading: false,
    notFound: true,
    user: null,
  })),

  on(addDeveloper, (state, action) => ({
    ...state,
    user: null,
    developers: [...state.developers, action.payload],
    notFound: false,
  }))
);
