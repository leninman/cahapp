import { Component } from '@angular/core';
import { Afiliado } from './afiliado';
import { AfiliadoService } from './afiliado.service';
import {Router,ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'



@Component({
  selector: 'app-formafiliado',
  templateUrl: './formafiliado.component.html',
  styleUrls: ['./formafiliado.component.css']
})
export class FormafiliadoComponent {

  public titulo:string="Crear afiliado"
  public afiliado:Afiliado=new Afiliado()

  ngOnInit(){
    this.cargarAfiliado()
  }

  constructor(private afiliadoService:AfiliadoService, private router:Router, private activatedRoute:ActivatedRoute){
  }

  public create():void{
    this.afiliadoService.createAfiliado(this.afiliado).subscribe(
            afiliado=>{
            this.router.navigate(['/afiliados'])
          swal.fire('Nuevo afiliado',`El afiliado ${afiliado.nombre} ha sido creado con exito`,'success')
            }
    )
  }


  public cargarAfiliado():void{
      this.activatedRoute.params.subscribe(params =>{
        let id = params['id']
        if(id){
          this.afiliadoService.getAfiliado(id).subscribe(afiliado=>this.afiliado=afiliado)
        }
      })
  }

  public update():void{
    this.afiliadoService.updateAfiliado(this.afiliado).subscribe(
            afiliado=>{
            this.router.navigate(['/afiliados'])
          swal.fire('Afiliado actualizado',`El afiliado ${afiliado.nombre} ha sido actualizado con exito`,'success')
            }
    )
  }

}
