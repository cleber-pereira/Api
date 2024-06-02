import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {
  cidades: any[] = [];
  public getCidades() {
    return this.httpClient.get('http://localhost:3000/api/cidades')
  }
  constructor(private httpClient:HttpClient) {  }
}