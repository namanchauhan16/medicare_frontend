import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    RegisterComponent,
    AdminComponent,
    AdminLoginFormComponent,
    NavbarComponent,
    AboutComponent,
    ProductPageComponent,
    CartComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
