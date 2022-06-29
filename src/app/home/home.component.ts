import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { ProductPageComponent } from '../product-page/product-page.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message: string = "Product unavailable";
  checked = true;
  selectedValue: string = '';
  products: any;
  constructor(private service: ProductService, private dialog: MatDialog,
    private titleService: Title) {
    this.titleService.setTitle('Medicare | products: pain relirf, medical suppiles, baby care, personal care')
  }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => this.products = data);
  }

  getProducts(val1: any) {
    if (val1 == 'all_products') {
      this.service.getProducts().subscribe((data) => this.products = data);
    } if (val1 == 'personal_care') {
      this.service.getProductsByType(val1).subscribe((data) => this.products = data);
    } if (val1 == 'pain_relief') {
      this.service.getProductsByType(val1).subscribe((data) => this.products = data);
    } if (val1 == 'baby_care') {
      this.service.getProductsByType(val1).subscribe((data) => this.products = data);
    } else {
      this.service.getProductsByType(val1).subscribe((data) => this.products = data);
    }
  }

  seeProduct(val1: any, val2: any, val3: any, val4: any) {
    localStorage.setItem('productId', val1);
    localStorage.setItem('productname', val2);
    localStorage.setItem('imageurl', val3);
    localStorage.setItem('productPrice', val4);
    this.dialog.open(ProductPageComponent);
  }
}

