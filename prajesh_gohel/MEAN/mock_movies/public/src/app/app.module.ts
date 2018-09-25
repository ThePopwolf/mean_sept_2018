import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './movies/http.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ShowMovieComponent } from './movies/show-movie/show-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { AddReviewComponent } from './movies/add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ShowMovieComponent,
    CreateMovieComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
