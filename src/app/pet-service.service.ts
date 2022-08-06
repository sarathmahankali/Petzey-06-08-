import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PetServiceService {

  private  PetapiUrl:string="https://localhost:44377/api/Pet";
  constructor(public  httpClient: HttpClient) { 
    
  }
  // getAllPets() {
  //   const headers = { 'content-type': 'application/json'};
  //   const baseURL = `${environment.petApiURL}` + "api/PetParentContactInfo";
  //   return this.httpClient.get(baseURL);
  //   // getVets():Observable<any[]>{

  //   //   return this.http.get<any[]>(this.vetapiUrl);
  // }
  getAllPets():Observable<any[]>{
    return this.httpClient.get<any[]>(this.PetapiUrl);
  }
}
