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
}
