import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http:HttpClient
  ) { }

  getListMovies(): Observable<any>{
    return this.http.get('http://localhost:3000/movies')
  }

  removeMovie(id:any):Observable<any> {
    return this.http.delete('http://localhost:3000/movies/'+id.movieId)
  }
  addMovie(movie:any):Observable<any> {
    return this.http.post<Movie>('http://localhost:3000/movies/',movie.movie)
  }
}
