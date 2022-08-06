
import { CommonModule } from '@angular/common';
import { RecepHeaderComponent } from './components/recep-header/recep-header.component';
import { ReceptionistRoutingModule } from './receptionist-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReceptionistComponent } from './receptionist.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RecepProfileComponent } from './components/recep-profile/recep-profile.component';
import { RecepPetsComponent } from './components/recep-pets/recep-pets.component';
import { RecepDashboardComponent } from './components/recep-dashboard/recep-dashboard.component';
import { RecepSidebarComponent } from './components/recep-sidebar/recep-sidebar.component';


@NgModule({
  declarations: [
    
    ReceptionistComponent,
    RecepHeaderComponent,
    RecepProfileComponent,
    RecepPetsComponent,
    RecepDashboardComponent,
   RecepSidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    ReceptionistRoutingModule
  ]
})
export class ReceptionistModule { }
