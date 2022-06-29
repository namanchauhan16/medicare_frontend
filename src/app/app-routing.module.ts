import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginFormComponent } from './admin-login-form/admin-login-form.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'signin',component:SignInComponent},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminloginForm',component:AdminLoginFormComponent},
  {path:'productpage',component:ProductPageComponent},
  {path:'cart',component:CartComponent},
  {path:'profile',component:ProfileComponent},
  {path:'',redirectTo:'signin',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
