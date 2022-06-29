import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SigninService } from '../services/signin.service';

interface registerUserData {
  fullname: String,
  username: String,
  password: String,
  emailId: String,
  phonenum: String,
  address: String
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: any;
  userDetails:any;
  registerUser:registerUserData = {
    fullname: "",
    username: "",
    password: "",
    emailId: "",
    phonenum: "",
    address: ""
  }

  constructor(private dialogRef: MatDialogRef<RegisterComponent>,private service:SigninService) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitForm() {
    this.service.searchByUsername(this.registerUser.username).subscribe((data)=>{
      this.userDetails = data;
      if(this.userDetails.length == 1){
        this.message = "Username already taken, Please try with different username";
      }else{
        this.service.registerUser(this.registerUser).subscribe((data)=>this.message = data);
        setTimeout(() => {
          this.dialogRef.close();
        }, 2400);
      }
    });
  }
}
