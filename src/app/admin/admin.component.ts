import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  checked = true;
  
  products: any;
  constructor(private service:ProductService, private titleService: Title) {
    this.titleService.setTitle("Mediare | admin's page")
   }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data)=>{this.products = data});
  }
  
  checkFunction(val:any){
    if(val == '1'){
      return this.checked;
    }else{
      return !this.checked;
    }
  }

  changeStatus(val1:any,val2:any){
    if(val2 == '0'){
      this.service.changeStatus(val1,'1').subscribe();
    }else{
      this.service.changeStatus(val1,'0').subscribe();
    }
  }

  deleteProduct(val1:any){
    this.service.deleteProduct(val1).subscribe();
    window.location.reload();
  }
}
