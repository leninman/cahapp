import { Component } from '@angular/core';
import { Usuario } from '../../usuario';
import { UsuarioService } from '../../usuario.service';
import {Router,ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'


@Component({
  selector: 'app-formusuario',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormusuarioComponent {

  public titulo:string="Crear usuario"
  public usuario:Usuario=new Usuario()

  constructor(private usuarioService:UsuarioService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.cargarUsuario()
  }

  public create():void{
    this.usuarioService.createUsuario(this.usuario).subscribe(
            usuario=>{
            this.router.navigate(['/usuarios'])
          swal.fire('Nuevo usuario',`El usuario ${usuario.nombres} ha sido creado con exito`,'success')
            }
    )
  }

  public cargarUsuario():void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe(usuario=>this.usuario=usuario)
      }
    })
}

public update():void{
  this.usuarioService.updateUsuario(this.usuario).subscribe(
          usuario=>{
          this.router.navigate(['/usuarios'])
        swal.fire('Usuario actualizado',`El usuario ${usuario.nombres} ha sido actualizado con exito`,'success')
          }
  )
}

cerrar(): void {
  this.router.navigate(['/usuarios']);
}

}
