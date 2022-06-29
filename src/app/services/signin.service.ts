import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  root_url:string = "http://54.242.232.205:8080/";

  constructor(private http:HttpClient) { }

  public doSignin(user:any,pass:any){
    return this.http.get(this.root_url+"register/"+user+"/"+pass);
  }

  public searchByUsername(username:any){
    return this.http.get(this.root_url+"register/"+username);
  }

  public registerUser(user:any){
    return this.http.post(this.root_url+"register/save",user,{responseType:'text' as 'json'});
  }
}