import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType } from "@angular/common/http";

import { IProduct } from "../model/product-model";
import { Observable } from "rxjs";

import {environment} from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  url = `${environment.theMirrorApi}/products`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }

  createProduct(formData: FormData): Observable<any> {
    return this.http.post(this.url, formData, {
      observe: "events",
      reportProgress: true
    });
  }
}
