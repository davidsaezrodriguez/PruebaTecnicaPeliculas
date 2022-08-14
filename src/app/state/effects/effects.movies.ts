import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { MoviesService } from '../../movies/services/movies.service';

@Injectable()
export class MoviesEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie API] Load Movies'),
      mergeMap(() =>
        this.moviesService.getListMovies().pipe(
          map((movies) => ({ type: '[Movie API] Loaded Movies', movies })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deleteMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie API] Delete Movie'),
      mergeMap((moveId:number) => this.moviesService.removeMovie(moveId))
    )
  );

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movie List] Add Movie'),
      mergeMap((movie) => this.moviesService.addMovie(movie))
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
