import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetServiceService } from '../pet-service.service';
import { ConsultationService } from '../consultation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 pets$!:Observable<any>;

  constructor(private petServiceService:PetServiceService, private c:ConsultationService ) { }
  
  ngOnInit(): void {
    // if (pets) {
    //   this.restaurantDetails = res;
    //   this.title = this.restaurantDetails.name;
    // }
    // let timeDiff = Math.abs(Date.now() - this.pets.getTime());
    // let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    this.pets$ = this.c.GetAppointments();
    console.log(this.pets$);
  };
}


