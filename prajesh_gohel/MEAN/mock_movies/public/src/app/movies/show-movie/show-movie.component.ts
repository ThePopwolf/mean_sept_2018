import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-show-movie',
  templateUrl: './show-movie.component.html',
  styleUrls: ['./show-movie.component.css']
})
export class ShowMovieComponent implements OnInit {

  movie: Object;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _moviesComponent: MoviesComponent
  ) { }

  ngOnInit() {
    this.movie = {
      title: ""
    }
    this._route.params.subscribe((params: Params) => {
      this.getAMovie(params['id']);
    });
  }

  getAMovie(id) {
    this._httpService.findOneMovie(id).subscribe(data => {
      console.log("Got a specific movie", data['movie']);
      this.movie = data['movie'];
    });
  }

  deleteMovie(id) {
    this._httpService.destroyMovie(id).subscribe(data => {
      console.log("Deleted movie", data['message']);
      this._httpService.findAllMovies().subscribe(extra => {
        this._moviesComponent.movies = extra['movies'];
        this._router.navigate(["/movies"]);
      });
    });
  }
}
