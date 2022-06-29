import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

declare var Razorpay: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {

  showModel = false;
  message1: string = "*Your cart is empty";
  message2: string = "";
  cartDetails: any;
  productDetails: any;

  constructor(private service1: CartService, private service2: ProductService,
    private service3: OrderService, private titleService: Title) { }

  ngOnInit(): void {
    let username = localStorage.getItem('username');
    this.titleService.setTitle("Medicare | "+username+"'s cart");
    this.service1.getByUsername(username).subscribe((data) => this.cartDetails = data);
  }

  placeOrder(val1: any, val2: any, val3: any, val4: any) {
    $.ajax(
      {
        url: 'http://54.242.232.205:8080/cart/createOrder',
        data: JSON.stringify({ data: val4, info: 'order_request' }),
        contentType: 'application/json',
        type: 'POST',
        success: function (response: any) {
          // opening form

          if (JSON.parse(response).status == "created") {
            let options = {
              key: 'rzp_test_Q7JMjBUy331a5Y',
              amount: JSON.parse(response).amount,
              currency: 'INR',
              name: 'Medicare',
              image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/MEDICARE_COMPANY_LOGO.png',
              order_id: response.id,
              handler: function (response: any) {
                console.log(response.razoroay_payment_id);
                console.log(response.razoroay_order_id);
                console.log(response.razorpay_signature);
                Swal.fire(
                  'Good job!',
                  'Payment Successful',
                  'success'
                )
              },
              prefill: {
                name: "",
                email: "",
                contact: ""
              },
              notes: {
                address: "Medicare"
              },
              theme: {
                color: "#3f51b5"
              }
            };

            var rzp = new Razorpay(options);

            rzp.on('payment.failed', function (response: any) {
              console.log(response.error.code);
              console.log(response.error.description);
              console.log(response.error.source);
              console.log(response.error.step);
              console.log(response.error.reason);
              console.log(response.error.metadata.order_id);
              console.log(response.error.metadata.payment_id);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
            });

            rzp.open();
          }
        },
        error: function (error: any) {
          console.log(error)
        },
      }
    )
    this.service2.changeQty(val1, val2).subscribe();
    this.service3.placeOrder(val3).subscribe();
  }

  removeProduct(val1: any): void {
    this.service1.deleteCartProduct(val1).subscribe();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
}