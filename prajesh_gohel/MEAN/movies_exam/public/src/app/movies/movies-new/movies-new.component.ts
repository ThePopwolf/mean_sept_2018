import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-movies-new',
  templateUrl: './movies-new.component.html',
  styleUrls: ['./movies-new.component.css']
})
export class MoviesNewComponent implements OnInit {

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
      stars: "",
      review: ""
    };
  }

  createMovie() {
    this.newMovie.stars = parseInt(this.newMovie.stars);
    this._httpService.addMovie(this.newMovie).subscribe(data => {
      console.log("Created movie", data['movie']);
      this.newMovie = {
        title: "",
        name: "",
        stars: "",
        review: ""
      };
      this._httpService.findMovies().subscribe(extra => {
        this._moviesComponent.movies = extra['movies'];
        this._router.navigate(['/movies']);
      });
    });
  }

}
