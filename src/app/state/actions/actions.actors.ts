import { createAction, props } from '@ngrx/store';
import { Actor } from '../../models/actors.interface';
 

export const loadActors = createAction(
    '[Actor API] Load Actors'
);

export const loadedActors = createAction(
    '[Actor API] Loaded Actors',
    props<{ actors: Actor[]}>()
);