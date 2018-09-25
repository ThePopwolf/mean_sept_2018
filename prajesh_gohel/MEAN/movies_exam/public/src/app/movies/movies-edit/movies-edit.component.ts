import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {

  movie: Object
  newReview: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    private _moviesComponent: MoviesComponent
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.getOneMovie(params['id']);
    });
    this.movie = {
      title: ""
    }
    this.newReview = {
      name: "",
      stars: "",
      review: ""
    };
  }

  getOneMovie(id) {
    this._httpService.findOneMovie(id).subscribe(data => {
      console.log("Found the movie", data['movie']);
      this.movie = data['movie'];
      console.log("I am a hippie", this.movie)
    })
  }

  createReview(id) {
    this.newReview.stars = parseInt(this.newReview.stars);
    this._httpService.addRating(id, this.newReview).subscribe(data => {
      console.log("Created rating", data['rating']);
      this.newReview = {
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
