import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  flash: any;
  newMovie: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _moviesComponent: MoviesComponent
  ) { }

  ngOnInit() {
    this.newMovie = {
      title: "",
      name: "",
      stars: "5",
      comment: ""
    }
  }

  createMovie() {
    this.newMovie.stars = parseInt(this.newMovie.stars);
    this._httpService.addMovie(this.newMovie).subscribe(data => {
      if (data['errors']) {
        return this.flash = data['errors'];
      }
      console.log("Created movie", data['movie']);
      this.newMovie = {
        title: "",
        name: "",
        stars: "5",
        comment: ""
      }
      this._httpService.findAllMovies().subscribe(extra => {
        this._moviesComponent.movies = extra['movies'];
        this._router.navigate(["/movies"]);
      });
    });
  }

}
