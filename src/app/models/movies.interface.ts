import { Actor } from "./actors.interface";

export interface Movie {
    actors:     number[];
    actorsName ?: Actor[];
    duration:   number;
    genre:      string[];
    id:         number;
    imdbRating: number;
    poster:     null | string;
    title:      string;
    year:       number;
}
   