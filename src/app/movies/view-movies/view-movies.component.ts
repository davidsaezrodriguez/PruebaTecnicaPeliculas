import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map } from 'rxjs';
import { Actor } from 'src/app/models/actors.interface';
import { Movie } from 'src/app/models/movies.interface';
import { loadActors } from 'src/app/state/actions/actions.actors';
import { deleteMovies, loadMovies } from 'src/app/state/actions/actions.movies';
import { AppState } from 'src/app/state/app.state';
import { selectListActors } from 'src/app/state/selectors/selectors.actors';
import { selectListMovies } from 'src/app/state/selectors/selectors.movies';

@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.sass'],
})
export class ViewMoviesComponent implements OnInit {
  id!: number;
  movie: Movie | undefined;

  deleteMovie(id:number){
    this.store.dispatch(loadMovies());
    this.store.dispatch(deleteMovies({movieId:id}))
    this.router.navigate(['/movies']);

  }
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router : Router) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.store
      .select(selectListMovies)
      .pipe(map((movies) => movies.filter((movie) => movie.id == this.id)))
      .subscribe((data) => {
        this.movie = data[0];
        this.movie = {
          ... this.movie ,
          actorsName: []
        };
        this.movie.actors.forEach((element) =>
          this.store
            .select(selectListActors)
            .pipe(
              map((actors: Actor[]) => {
                this.movie?.actorsName.push(actors.filter(
                  (actor: Actor) => actor.id == element
                )[0]);
              })
            )
            .subscribe()
        );
      });
  }
}
