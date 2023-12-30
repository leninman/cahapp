import { Component, OnInit } from '@angular/core';
import { Afiliado } from './afiliado';
import { AfiliadoService } from './afiliado.service';
import swal from 'sweetalert2'
@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliado.component.html',
  styleUrls: ['./afiliado.component.css']
})
export class AfiliadoComponent implements OnInit{

  afiliados:Afiliado[]=[]
  private afiliadoService:AfiliadoService

  constructor(afiliadoService:AfiliadoService){
    this.afiliadoService=afiliadoService
  }

  ngOnInit(){


    this.afiliadoService.getAfiliados().subscribe(
      (afiliados) =>{
        this.afiliados=afiliados
      }
    )



  }


  public delete(afiliado:Afiliado):void{
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Esta seguro?",
      text: `Seguro que desea eliminar el afiliado ${afiliado.nombre} ${afiliado.apellido}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, eliminart!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.afiliadoService.delete(afiliado.id).subscribe(
          response=>{
            this.afiliados=this.afiliados.filter(cli=>cli!==afiliado)
            swalWithBootstrapButtons.fire({
              title: "Afiliado eliminado!",
              text: `El afiliado ${afiliado.nombre} ${afiliado.apellido} ha sido eliminado.`,
              icon: "success"
            });
          }
        )




       
      } 
    });


  }

  

}
