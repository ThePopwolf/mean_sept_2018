import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductsCreateComponent } from './products/products-create/products-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'edit/:id', component: ProductsEditComponent },
    { path: 'new', component: ProductsCreateComponent } ]
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
