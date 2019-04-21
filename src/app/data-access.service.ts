import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient}from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataAccessService {
  API_URI=environment.apiUrl;
  private mySubject=new BehaviorSubject("Default msg");
  myObservable=this.mySubject.asObservable();

  
  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get(this.API_URI);
  }
  
}
