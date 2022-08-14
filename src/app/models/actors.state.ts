import { Actor } from "./actors.interface";

export interface ActorsState{
    loading: boolean;
    actorsList: Actor[];
}