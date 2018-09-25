import { CitiesComponent } from './cities/cities.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ':city', component: CitiesComponent },
  { path: '', pathMatch: 'full', redirectTo: '/dallas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
