import { ActionReducerMap } from '@ngrx/store';
import { ActorsState } from '../models/actors.state';
import { MoviesState } from '../models/movies.state';
import { moviesReducer } from '../state/reducers/recuders.movies'
import { actorsReducer } from './reducers/reducers.actors';
export interface AppState {
  movies: MoviesState;
  actors: ActorsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
  actors: actorsReducer
};
