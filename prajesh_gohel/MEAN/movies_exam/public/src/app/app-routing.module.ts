import { MoviesComponent } from './movies/movies.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesShowComponent } from './movies/movies-show/movies-show.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent, children: [
    { path: 'new', component: MoviesNewComponent },
    { path: ':id', component: MoviesShowComponent },
    { path: ':id/edit', component: MoviesEditComponent }]
  },
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: '**', redirectTo: '/movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
