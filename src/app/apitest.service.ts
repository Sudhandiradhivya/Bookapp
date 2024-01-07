import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {
  // images:string="http://localhost:3000/Images"

  constructor(private httpClient:HttpClient) { }

  getImages(): Observable<any[]>{
    return this.httpClient.get<any[]>('http://localhost:3000/Images');
  }

  getBooks():Observable<any[]>{
    return this.httpClient.get<any[]>(' http://localhost:3000/books');
  }
}
