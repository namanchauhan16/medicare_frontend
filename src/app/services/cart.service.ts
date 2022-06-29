import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  root_url:string = "http://54.242.232.205:8080/";

  public addToCart(val1:any){
    return this.http.post(this.root_url+"cart/save",val1,{responseType:'text' as 'json'});
  }

  public getByUsername(val1:any){
    return this.http.get(this.root_url+"cart/"+val1);
  }

  public deleteCartProduct(val1:any){
    return this.http.delete(this.root_url+"cart/delete/"+val1,{responseType:'text' as 'json'});
  } 
}
