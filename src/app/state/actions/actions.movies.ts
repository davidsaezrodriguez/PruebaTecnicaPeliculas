import { createAction, props } from '@ngrx/store';
import { Movie } from '../../models/movies.interface';
 

export const loadMovies = createAction(
    '[Movie API] Load Movies'
);

export const loadedMovies = createAction(
    '[Movie API] Loaded Movies',
    props<{ movies: Movie[]}>()
);

export const deleteMovies = createAction(
    '[Movie API] Delete Movie',
    props<{ movieId: number}>()
);


// export const addMovie = createAction(
//   '[Movie List] Add Movie',
//   props<{ movieId: string }>()
// );
 
// export const removeMovie = createAction(
//   '[Movie Collection] Remove Movie',
//   props<{ movieId: string }>()
// );
