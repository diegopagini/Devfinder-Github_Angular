import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppInitialState } from '../../models/app.state.model';

export const state = createFeatureSelector<AppInitialState>('app');

export const loadingSelector = createSelector(state, (app) => app.loading);

export const userSelector = createSelector(state, (app) => app.user);

export const developersSelector = createSelector(
  state,
  (app) => app?.developers
);

export const areDevelopersSelector = createSelector(
  state,
  (app) => !!app?.developers?.length
);
