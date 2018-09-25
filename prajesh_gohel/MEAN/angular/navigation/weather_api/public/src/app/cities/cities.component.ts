import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { WeatherService } from '../weather.service'

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _weatherService: WeatherService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("City of", params);
      this.findCity(params['city']);
    });
  }

  findCity(city) {
    this._weatherService.findingCity(city).subscribe(data => {
      console.log(data);
    });
  }
}
