import { createSelector, createFeatureSelector } from '@ngrx/store';
import { MoviesState } from 'src/app/models/movies.state';
import { Movie } from '../../models/movies.interface';
import { AppState } from '../app.state';

export const selectMovies = (state: AppState) => state.movies;

export const selectListMovies = createSelector(
  selectMovies,
  (state: MoviesState) => state.moviesList
);

export const selectLoadingMovies = createSelector(
  selectMovies,
  (state: MoviesState) => state.loading
);
