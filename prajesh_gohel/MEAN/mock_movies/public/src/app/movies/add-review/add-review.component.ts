import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  movie: Object;
  newReview: any;
  flash: any;
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
    this.newReview = {
      name: "",
      stars: "5",
      comment: ""
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

  createReview(id) {
    this.newReview.stars = parseInt(this.newReview.stars);
    this._httpService.addReview(id, this.newReview).subscribe(data => {
      if (data['errors']) {
        return this.flash = data['errors'];
      }
      console.log("Added rating");
      this.newReview = {
        name: "",
        stars: "5",
        comment: ""
      }
      this._httpService.findAllMovies().subscribe(extra => {
        for (let i = 0; i < extra['movies'].length; i++) {
          extra['movies'][i]['average_rating'] = this._moviesComponent.findAverage(extra['movies'][i]);
        }
        this._moviesComponent.movies = extra['movies'];
        this._router.navigate(['/movies']);
      });
    });
  }
}
