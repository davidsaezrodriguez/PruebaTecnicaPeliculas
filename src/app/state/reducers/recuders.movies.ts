import { createReducer, on } from '@ngrx/store';

import {
  addMovie,
  deleteMovies,
  loadedMovies,
  loadMovies,
} from '../actions/actions.movies';
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
  on(loadedMovies, (state, { movies }) => {
    return { ...state, loading: false, moviesList: movies };
  }),
  on(deleteMovies, (state, { movieId }) => ({
    ...state,
    loading: false,
    moviesList: state.moviesList.filter((element) => element.id !== movieId),
  })),
  on(addMovie,(state, { movie }) => ({
    ...state,
    loading: false,
    moviesList: {
      ...state.moviesList,
      movie
    },
  }))
);
