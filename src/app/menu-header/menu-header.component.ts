import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  filter,
  map,
  Observable,
  Subject,
  Subscription,
  takeUntil,
} from 'rxjs';
import { Movie } from '../models/movies.interface';
import { loadMovies } from '../state/actions/actions.movies';
import { AppState } from '../state/app.state';
import {
  selectListMovies,
  selectLoadingMovies,
} from '../state/selectors/selectors.movies';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.sass'],
})
export class MenuHeaderComponent implements OnInit {
  // public subscriber!: Subscription;

  private destroy$ = new Subject<void>();

  returnPageVisible = false;
  namePage = '';

  getNamePage(url: string) {
    let id: number;
    if (url.indexOf('view-movies') != -1) {
      id = Number(url.substring(url.indexOf('view-movies') + 12, url.length));
      url = 'view-movies';
    }
    switch (url) {
      case '/movies':
        return 'Peliculas';
      case 'new-film':
        this.returnPageVisible = true;
        return 'Nueva pelicula';
      case 'view-movies':
        this.returnPageVisible = true;
        let nameMovie = '';
        this.store
          .select(selectListMovies)
          .pipe(map((movies) => movies.filter((movie) => movie.id == id)))
          .subscribe((data) => {
            nameMovie = data[0]?.title + '(' + data[0]?.year + ')';
          });
        return nameMovie;
      default:
        return '';
    }
  }

  goBack() {
    this.location.back();
  }

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.namePage = this.getNamePage(event.url);
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
