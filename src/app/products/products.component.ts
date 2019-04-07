import { Component, OnInit } from "@angular/core";
import { ProductService } from "../mirror-service/product.service";
import { IProduct } from "../model/product-model";
import { MatDialog } from "@angular/material";
import { CreateProductComponent } from "../create-product/create-product.component";

@Component({
  selector: "tm-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  products: IProduct[];
  admin: true;
  constructor(
    private productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(x => (this.products = x));
  }

  isAdmin() {
    return true;
  }
  openProductEditor() {
    const dialogRef = this.dialog.open(CreateProductComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
