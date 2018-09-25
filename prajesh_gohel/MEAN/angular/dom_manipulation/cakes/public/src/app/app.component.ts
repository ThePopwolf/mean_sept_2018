import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Rate My Cakes';
  cakes: Object[];
  cake: Object;
  newCake: any;
  rating: any;
  // averageRating: number;

  constructor(private _cakeService: CakeService){}

  ngOnInit() {
    this.newCake = { baker_name: "", imageURL: "" };
    this.getAllCakes();
  }

  getAllCakes() {
    let observable = this._cakeService.getCakes();
    observable.subscribe(data => {
      console.log("Got all cakes!", data['cakes']);
      this.cakes = data['cakes'];
    });
  }

  createCake() {
    let observable = this._cakeService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("Created cake!", data);
      this.newCake = { baker_name: "", imageURL: "" };
      this.getAllCakes();
    });
  }

  createRating(cake) {
    if (cake.stars == null || cake.comment == null) {
      return this.getAllCakes();
    }
    var stars = parseInt(cake.stars)
    this.rating = { stars: stars, comment: cake.comment }
    this._cakeService.addRating(cake._id, this.rating).subscribe(data => {
      console.log("Added rating for cake", data);
      this.rating = null;
      this.cakeToShow(cake);
      this.getAllCakes();
    })
  }

  cakeToShow(cake) {
    this._cakeService.findCake(cake._id).subscribe(data => {
      console.log("Found cake:", data['cake']);
      this.cake = data['cake'];

      this.cake['average'] = this.findAverage(cake);
      console.log(this.cake['average']);
    });
  }

  findAverage(cake) {
    var sum = 0;
    for (let i = 0; i < cake.ratings.length; i++) {
      sum += cake.ratings[i].stars;
    }
    return sum / cake.ratings.length;
  }
}
