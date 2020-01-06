import { Component, OnInit } from '@angular/core';
import {Product} from '../product/product.component';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit {
  products: Product[];
  constructor(private http: ProductsService) {}
  ngOnInit() {
    this.http.fetch().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  addToBasket(id: number) {
    this.products.find(product => product.id === id).inBasket = true;
  }
}
