import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PetServiceService } from '../pet-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  pets$!:Observable<any>;
  constructor(private petServiceService:PetServiceService) { }

  ngOnInit(): void {

    this.pets$ = this.petServiceService.getAllPets();
  }
  
}
