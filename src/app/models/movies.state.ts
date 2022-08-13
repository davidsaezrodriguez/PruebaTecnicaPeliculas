import { Movie } from "./movies.interface";

export interface MoviesState{
    loading: boolean;
    moviesList: Movie[];
}