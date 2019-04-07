import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { IProduct } from "../model/product-model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url = "http://localhost:3000/products";

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}
