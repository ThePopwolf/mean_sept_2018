import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  selected: boolean;
  movies: Object[];
  averageRating: any;
  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.selected = true;
    this.getMoviesFromService();
  }

  showParent() {
    this.selected = true;
  }

  hideParent() {
    this.selected = false
  }

  getMoviesFromService() {
    this._httpService.findAllMovies().subscribe(data => {
      console.log("Got all movies", data['movies']);
      for (let i = 0; i < data['movies'].length; i++) {
        data['movies'][i]['average_rating'] = this.findAverage(data['movies'][i]);
      }
      this.movies = data['movies'];
    });
  }

  findAverage(movie) {
    var sum = 0;
    for (let i = 0; i < movie.reviews.length; i++) {
      sum += movie.reviews[i].stars;
    }
    return sum / movie.reviews.length;
  }
}
