import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  addProduct(newProduct) {
    return this._http.post(`/api/products/new`, newProduct);
  }

  findProducts() {
    return this._http.get(`/api/products`);
  }
}
