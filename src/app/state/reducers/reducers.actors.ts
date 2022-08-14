import { createReducer, on } from '@ngrx/store';
import { ActorsState } from 'src/app/models/actors.state';
import { loadActors, loadedActors } from '../actions/actions.actors';

export const initialState: ActorsState = {
  loading: false,
  actorsList: [],
};

export const actorsReducer = createReducer(
  initialState,
  on(loadActors, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedActors, (state, {actors}) => {
    return { ...state, loading: false, actorsList: actors };
  })
);
