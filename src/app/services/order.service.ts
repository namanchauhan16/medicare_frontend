import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  root_url:string = "http://54.242.232.205:8080/";

  constructor(private http:HttpClient) { }

  public placeOrder(val1:any){
    return this.http.post(this.root_url+"orderDetails/save",val1,{responseType:'text' as 'json'});
  }

  public getOrderDetails(val1:any){
    return this.http.get(this.root_url+"orderDetails/"+val1);
  }

  public cancleOrder(val1:any){
    return this.http.delete(this.root_url+"orderDetails/delete/"+val1,{responseType:'text' as 'json'});
  }
}
