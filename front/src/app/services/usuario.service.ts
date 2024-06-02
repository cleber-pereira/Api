import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  cidades: any[] = [];
  public getUsuarios() {
    //return this.httpClient.get('http://localhost:3000/api/usuarios')
    return this.httpClient.get('http://localhost:3000/api/usuarios/2/1/F/3/3/AM/111')
  }
  constructor(private httpClient:HttpClient) {  }
}
