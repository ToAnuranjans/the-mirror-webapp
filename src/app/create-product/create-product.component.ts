import { Component, OnInit } from "@angular/core";
import { IProduct } from "../model/product-model";

@Component({
  selector: "tm-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"]
})
export class CreateProductComponent implements OnInit {
  url: string;
  newProduct: IProduct = {} as IProduct;
  constructor() {}

  ngOnInit() {}

  uploadFile(event: any): void {
    console.log({ event: event.target.value });
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.newProduct.imageUrl = this.url = e.target.result;
        console.log(this.url);
      };
    }
  }

  onSubmit(event: any) {
    console.log({ event });
    console.log({ product: this.newProduct });
  }
}
