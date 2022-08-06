import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepDashboardComponent } from './components/recep-dashboard/recep-dashboard.component';
import { RecepPetsComponent } from './components/recep-pets/recep-pets.component';
import { RecepProfileComponent } from './components/recep-profile/recep-profile.component';
import { VetsComponent } from './components/vets/vets.component';

const routes: Routes = [
  // { path: '', redirectTo: 'receptionist/recep-dashboard', pathMatch: 'full' },
  // { path: 'recep-dashboard', component: RecepDashboardComponent },
  // { path: 'recep-pets', component: RecepPetsComponent },
  // {path:'recep-profile',component:RecepProfileComponent},
  // {path:'recep-vets',component:VetsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionistRoutingModule { }
