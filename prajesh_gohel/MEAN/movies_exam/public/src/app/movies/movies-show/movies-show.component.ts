import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-movies-show',
  templateUrl: './movies-show.component.html',
  styleUrls: ['./movies-show.component.css']
})
export class MoviesShowComponent implements OnInit {

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
      this.getOneMovie(params['id']);
    });
  }

  getOneMovie(id) {
    this._httpService.findOneMovie(id).subscribe(data => {
      console.log("Found the movie", data['movie']);
      this.movie = data['movie'];
      console.log("This", this.movie)
    })
  }

  deleteMovie(id) {
    this._httpService.destroyMovie(id).subscribe(data => {
      console.log("Destroyed movie");
      this._httpService.findMovies().subscribe(extra => {
        this._moviesComponent.movies = extra['movies'];
        this._router.navigate(['/movies']);
      });
    })
  }
}
