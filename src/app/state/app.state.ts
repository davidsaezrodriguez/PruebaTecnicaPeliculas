import { ActionReducerMap } from '@ngrx/store';
import { MoviesState } from '../models/movies.state';
import { moviesReducer } from '../state/reducers/recuders.movies'
export interface AppState {
  movies: MoviesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  movies: moviesReducer,
};
