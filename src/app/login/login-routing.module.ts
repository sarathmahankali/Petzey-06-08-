import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path:'login-page',component:LoginPageComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'not-found',component:NotFoundComponent},
  {path:'',redirectTo:'/login-page',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
