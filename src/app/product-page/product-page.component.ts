import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';
interface data{
  imageUrl:any,
  productId:any,
  productName:any,
  productQuantity:any,
  totalPrice:any,
  username:any,
  quantity:any
}
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  constructor(private service1:ProductService,private dialogRef:MatDialogRef<ProductPageComponent>,
    private service2:CartService) { }

  cartData:data = {
    productName: undefined,
    username: undefined,
    quantity: undefined,
    imageUrl: undefined,
    productId: undefined,
    productQuantity: undefined,
    totalPrice: undefined
  }
  productDetails:any;
  ngOnInit(): void {
    let id = localStorage.getItem('productId');
    this.cartData.productId = id;
    this.cartData.productName = localStorage.getItem('productname');
    this.cartData.username = localStorage.getItem('username');
    this.cartData.imageUrl = localStorage.getItem('imageurl');
    this.service1.getProductById(id).subscribe((data)=>this.productDetails = data);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  addToCart(val1:any){
    let newQty = val1 - this.cartData.quantity;
    this.cartData.productQuantity = newQty;
    let unitPrice:any = localStorage.getItem('productPrice');
    this.cartData.totalPrice = this.cartData.quantity * unitPrice;

    this.service2.addToCart(this.cartData).subscribe();
    this.dialogRef.close();
  }
}