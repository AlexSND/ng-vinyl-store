import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsService} from '../products.service';

export interface Product {
  id: number;
  artist: string;
  title: string;
  catnumber: string;
  imageUrl: string;
  price: number;
  inBasket?: boolean;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() onToBasket = new EventEmitter<number>();

  toBasket(id: number, event: MouseEvent) {
    this.onToBasket.emit(id);
    event.preventDefault();
  }
}
