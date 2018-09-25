import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  findAllMovies() {
    return this._http.get("/api/movies");
  }

  findOneMovie(id) {
    return this._http.get("/api/movies/"+id);
  }

  addMovie(movie) {
    return this._http.post("/api/movies", movie);
  }

  addReview(id, review) {
    return this._http.put("/api/movies/"+id+"/review", review);
  }

  destroyMovie(id) {
    return this._http.delete("/api/movies/"+id);
  }
}
