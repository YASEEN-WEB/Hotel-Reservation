import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  httpoption={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("https://localhost:44382/api/Hotel/get")
  }
}
