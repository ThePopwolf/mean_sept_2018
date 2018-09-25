import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: Object[];
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService() {
    this._httpService.findMovies().subscribe(data => {
      console.log(data['movies']);
      this.movies = data['movies'];
    });
  }

}
