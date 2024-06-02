import { Component, OnInit } from '@angular/core';
//import { CidadesService } from "./services/cidades.service";
import { UsuarioService } from "./services/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/app.component.scss']
})
export class AppComponent implements OnInit {
  usuarios:any;
  title = 'Dating';
  ngOnInit(): void{
    this.usuarios = this.usuariosService.getUsuarios()
    .subscribe((u: any) => {
      this.usuarios = u['result'];
      console.log(this.usuarios);
    });
  }
  constructor(private usuariosService:UsuarioService){}
}