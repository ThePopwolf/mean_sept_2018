import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CakeService {
  constructor(private _http: HttpClient) {}

  getCakes() {
    return this._http.get('/cakes');
  }

  addCake(newCake) {
    return this._http.post('/cakes', newCake);
  }

  addRating(id, rating) {
    return this._http.put('/cakes/rating/'+id, rating);
  }

  findCake(id) {
    return this._http.get('/cakes/'+id);
  }
}
