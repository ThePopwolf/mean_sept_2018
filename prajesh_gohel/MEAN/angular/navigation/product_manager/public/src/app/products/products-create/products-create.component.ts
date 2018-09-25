import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {
  newProduct: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService,
    private _productComponent: ProductsComponent
  ) { }

  ngOnInit() {
    this.newProduct = { title: "", price: 0, imageURL: "" }
    this._productComponent.selected = false;
  }

  createProduct() {
    console.log(this.newProduct);
    this._productService.addProduct(this.newProduct).subscribe(data => {
      console.log("Created product", data['product']);
      this._productService.findProducts().subscribe(moreData => {
        this._productComponent.products = moreData['products'];
        this._router.navigate(['/products']);
      });
    });
  }

}
