import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private _http: HttpClient) {}

  findingCity(city) {
    return this._http.get("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&APPID=0a40437cd89f850fc9cf1a9f1869d54a")
  }
}
