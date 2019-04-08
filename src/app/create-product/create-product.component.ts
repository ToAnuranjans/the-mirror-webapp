import { Component, OnInit } from "@angular/core";
import { IProduct } from "../model/product-model";
import { ProductService } from "../mirror-service/product.service";
declare var result: any;

@Component({
  selector: "tm-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"]
})
export class CreateProductComponent implements OnInit {
  url: string;
  newProduct: IProduct = {} as IProduct;
  imageData: File;
  constructor(private productService: ProductService) {}

  ngOnInit() {}

  uploadFile(event: any): void {
    console.log({ event: event.target.value });
    if (event.target.files && event.target.files[0]) {
      this.imageData = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = e => {
        // called once readAsDataURL is completed
        this.url = this.url = (e.target as any).result;
      };
    }
  }

  onSubmit(event: any) {
    let prod;
    const formData = new FormData();
    formData.append("image", this.imageData, this.imageData.name);

    for (prod in this.newProduct) {
      if (this.newProduct.hasOwnProperty(prod)) {
        formData.append(prod, this.newProduct[prod]);
      }
    }

    this.productService
      .createProduct(formData)
      .subscribe(x => console.log({ x }));
  }
}
