import { createReducer, on } from '@ngrx/store';

import { loadedMovies, loadMovies } from '../actions/actions.movies';
import { Movie } from '../../models/movies.interface';
import { MoviesState } from 'src/app/models/movies.state';

export const initialState: MoviesState = {
  loading: false,
  moviesList: [],
};

export const moviesReducer = createReducer(
  initialState,
  on(loadMovies, (state) => {
    return { ...state, loading: true };
  }),
  on(loadedMovies, (state, {movies}) => {
    return { ...state, loading: false, moviesList: movies };
  })
);
