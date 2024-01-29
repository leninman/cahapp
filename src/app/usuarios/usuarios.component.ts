import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { UsuarioService } from './usuario.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarios:Usuario[]=[]
  private usuarioService:UsuarioService

  constructor(usuarioService:UsuarioService){
    this.usuarioService=usuarioService
  }

  ngOnInit(){
    this.usuarioService.getUsuarios().subscribe(
      (usuarios) =>{
        this.usuarios=usuarios
      }
    )
  }

}
