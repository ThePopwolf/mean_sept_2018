import { MoviesComponent } from './movies/movies.component';
import { ShowMovieComponent } from './movies/show-movie/show-movie.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { AddReviewComponent } from './movies/add-review/add-review.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'new', component: CreateMovieComponent },
    { path: ':id', component: ShowMovieComponent },
    { path: ':id/review', component: AddReviewComponent }]
  },
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: '**', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
