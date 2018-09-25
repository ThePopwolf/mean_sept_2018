import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selected: boolean;
  products: Object[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService
  ) { }

  ngOnInit() {
    this.selected = true;
    console.log(this.selected);
    this.getProducts();
  }

  dataFromChild() {
    console.log("Parent selected");
    this.selected = !this.selected;
  }

  getProducts() {
    this._productService.findProducts().subscribe(data => {
      this.products = data['products'];
    });
  }

}
