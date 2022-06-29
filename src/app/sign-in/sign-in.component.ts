import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { SigninService } from '../services/signin.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private service1: SigninService, private router: Router,
    private dialog: MatDialog, private titleService: Title) {
    this.titleService.setTitle('Medicare | user signin, Register new user');
  }

  users: any;

  ngOnInit(): void {
  }

  doSignin(val1: any, val2: any) {

    if (val1.length == 0 || val2.length == 0) {
      alert("Pleas fill the input fields");
    } else {
      localStorage.setItem('username', val1);
      this.service1.doSignin(val1, val2).subscribe((data) => {
        this.users = data;
        if (this.users.length == 1) {
          this.router.navigate(['home']);
        } else {
          alert("Invalid user, Pleas sign in using correct credentials");
          window.location.reload();
        }
      });
    }
  }
  createUser() {
    this.dialog.open(RegisterComponent);
  }

  adminLogin() {
    this.router.navigate(['adminloginForm']);
  }
}
