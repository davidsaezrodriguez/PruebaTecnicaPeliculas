import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadMovies } from '../../state/actions/actions.movies';
import { selectListMovies, selectLoadingMovies } from 'src/app/state/selectors/selectors.movies';
import { AppState } from 'src/app/state/app.state';
import { Movie } from 'src/app/models/movies.interface';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.sass'],
})
export class MoviesListComponent implements OnInit {
  $loading: Observable<boolean> = new Observable();
  $movies: Observable<Movie[]> = new Observable();

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadMovies());

    this.$loading = this.store.select(selectLoadingMovies);
    this.$movies = this.store.select(selectListMovies);
  }
}
