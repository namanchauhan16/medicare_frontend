import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-admin-login-form',
  templateUrl: './admin-login-form.component.html',
  styleUrls: ['./admin-login-form.component.css']
})
export class AdminLoginFormComponent implements OnInit {

  adminDetails: any;

  constructor(private service: AdminService, private router: Router,
    private titleService: Title) {
      this.titleService.setTitle('Medicare | admin login')
     }

  ngOnInit(): void {
  }

  doLogin(val1: any, val2: any) {
    if (val1.length == 0 || val2.length == 0) {
      alert("Pleas fill the input fields");
    } else {
      this.service.adminLogin(val1, val2).subscribe((data) => {
        this.adminDetails = data;
        if (this.adminDetails.length == 1) {
          this.router.navigate(['admin']);
        } else {
          alert("Admin with username '" + val1 + "' not found");
          window.location.reload();
        }
      });
    }
  }
}
