import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesNewComponent } from './movies/movies-new/movies-new.component';
import { MoviesShowComponent } from './movies/movies-show/movies-show.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesNewComponent,
    MoviesShowComponent,
    MoviesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
