import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OrderService } from '../services/order.service';
import { ProductService } from '../services/product.service';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message: string = "*No order places yet";
  username: any;
  orderDetails: any;
  userDetails: any;
  constructor(private service1: OrderService, private service2: SigninService,
    private service3: ProductService, private titleService: Title) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.titleService.setTitle('Medicare | '+this.username+' profile');
    this.service1.getOrderDetails(this.username).subscribe((data) => this.orderDetails = data);
    this.service2.searchByUsername(this.username).subscribe((data) => this.userDetails = data);
  }

  cancleOrder(val1: any, val2: any, val3: any, val4: any) {
    let newQty: number = val3 + val4;
    this.service3.changeQty(val2, newQty).subscribe();
    setTimeout(() => {
      this.service1.cancleOrder(val1).subscribe();
      window.location.reload();
    }, 1000);
  }
}
