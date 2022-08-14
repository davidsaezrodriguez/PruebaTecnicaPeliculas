import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ActorsService } from '../../actors/services/actors.service';
 
@Injectable()
export class ActorsEffects {
 
  loadActors$ = createEffect(() => this.actions$.pipe(
    ofType('[Actor API] Load Actors'),
    mergeMap(() => this.actorsService.getListActors()
      .pipe(
        map(actors => ({ type: '[Actor API] Loaded Actors', actors })),
        catchError(() => EMPTY) 
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private actorsService: ActorsService
  ) {}
}