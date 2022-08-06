import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  public  ConsultationapiUrl:string="https://localhost:44326/";
  constructor(public  httpClient: HttpClient) { }

  GetAppointments():Observable<any[]>{
    let url:string = this.ConsultationapiUrl+"api/Consultation/GetConfirmedAppointments";
    return this.httpClient.get<any[]>(url);
  }
}
