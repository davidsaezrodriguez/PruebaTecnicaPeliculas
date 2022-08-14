import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Actor } from 'src/app/models/actors.interface';
import { Movie } from 'src/app/models/movies.interface';
import { addMovie } from 'src/app/state/actions/actions.movies';
import { AppState } from 'src/app/state/app.state';
import { selectListActors } from 'src/app/state/selectors/selectors.actors';

@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.sass'],
})
export class MoviesNewComponent implements OnInit {
  pelicula!: FormGroup;
  actors: Actor[] = [];

  onSubmit(form: any) {
    console.log(form);
    let actorsArrayNumber: number[]= [];
    form.actores.forEach((element: any) => {
      actorsArrayNumber.push(Number(element))
    });
    let movie:Movie = {
      actors: actorsArrayNumber,
      duration: Number(form.duracion),
      genre: form.generos,
      id: Math.floor(Math.random() * 2000),
      imdbRating: Number(form.puntuacion),
      poster: form.poster,
      title: form.titulo,
      year: Number(form.año),
    };
    this.store.dispatch(addMovie({movie}));
    this.router.navigate(['/movies']);
  }
  get f() {
    return this.pelicula.controls;
  }
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.store
      .select(selectListActors)
      .subscribe((data) => (this.actors = data));

    this.pelicula = this.formBuilder.group({
      titulo: ['', Validators.required],
      poster: ['', [Validators.required]],
      generos: ['', Validators.required],
      actores: ['', Validators.required],
      año: ['', [Validators.required]],
      duracion: ['', [Validators.required]],
      puntuacion: ['', [Validators.required]],
    });
  }
}
