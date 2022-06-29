import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  root_url:string = "http://54.242.232.205:8080/";

  constructor(private http:HttpClient) { }

  public getProducts(){
    return this.http.get(this.root_url+"products");
  }

  public getProductById(val1:any){
    return this.http.get(this.root_url+"products/id/"+val1);
  }

  public getProductsByType(val1:any){
    return this.http.get(this.root_url+"products/type/"+val1);
  }

  public changeStatus(val1:any,val2:any){
    return this.http.put(this.root_url+"products/update/status/"+val1+"/"+val2,{responseType:'text' as 'json'});
  }

  public changeQty(val1:any,val2:any){
    return this.http.put(this.root_url+"products/update/qty/"+val1+"/"+val2,{responseType:'text' as 'json'});
  }

  public deleteProduct(val1:any){
    return this.http.delete(this.root_url+"products/delete/"+val1,{responseType:'text' as 'json'});
  }
}
