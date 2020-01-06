import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  fetch() {
    return this.http.get('https://my-json-server.typicode.com/AlexSND/demo/products');
  }
}
