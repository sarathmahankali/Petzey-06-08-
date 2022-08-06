import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './login/components/not-found/not-found.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
   {path: 'home', component: HomeComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path:'newappointment',component:NewAppointmentComponent},
  {path:'profile',component:ProfileComponent},
  {path:'login',
  loadChildren:()=>
  import('./login/login.module').then((m)=>m.LoginModule),
  },
  //{path:'receptionist',
  // loadChildren:()=>
  // import('./receptionist/receptionist.module').then((m)=>m.ReceptionistModule),
  // },
  {path:'test1',
  loadChildren:()=>
  import('./test1/test1.module').then((m)=>m.Test1Module),
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
