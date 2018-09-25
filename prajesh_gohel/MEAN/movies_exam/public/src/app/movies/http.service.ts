import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {}

  findMovies() {
    return this._http.get('/api/movies');
  }

  addMovie(movie) {
    return this._http.post('/api/movies', movie);
  }

  findOneMovie(id) {
    return this._http.get('/api/movies/'+id);
  }

  destroyMovie(id) {
    return this._http.delete('/api/movies/'+id);
  }

  addRating(id, rating) {
    return this._http.put('/api/movies/'+id+'/edit', rating);
  }
}
