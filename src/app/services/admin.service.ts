import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  root_url:string = "http://54.242.232.205:8080/";

  public adminLogin(user: any, pass: any) {
    return this.http.get(this.root_url+"admin/"+user+"/"+pass);
  }
}
