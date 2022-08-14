import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ActorsState } from 'src/app/models/actors.state';
import { AppState } from '../app.state';

export const selectActors = (state: AppState) => state.actors;

export const selectListActors = createSelector(
  selectActors,
  (state: ActorsState) => state.actorsList
);

export const selectLoadingActors = createSelector(
  selectActors,
  (state: ActorsState) => state.loading
);
