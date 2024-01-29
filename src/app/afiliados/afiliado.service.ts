import { Injectable } from '@angular/core';
import { Afiliado } from './afiliado';
import { Observable,map,catchError,throwError} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router'
import {environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private url:string=environment.apiUrl+'afiliado'
  private httpHeaders=new HttpHeaders({'Content-Type':'application-json'})

  constructor(private http:HttpClient,private router:Router) { }

  public getAfiliados():Observable<Afiliado[]>{
        return this.http.get<Afiliado[]>(this.url+'/listar')
  }

  public createAfiliado(afiliado:Afiliado):Observable<Afiliado>{
    return this.http.post<Afiliado>(this.url+'/crear',afiliado).pipe(
      map((response:any)=>response.afiliado as Afiliado),
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }

  public getAfiliado(id:number):Observable<Afiliado>{
        return this.http.get<Afiliado>(`${this.url+'/consultar'}/${id}`).pipe(
          catchError(e=>{
            this.router.navigate(['/afiliados'])
              console.error(e.error.mensaje)
              swal.fire('Error al consultar el afiliado',e.error.mensaje,'error');
              return throwError(e);
          })
        );
  }

  public updateAfiliado(afiliado:Afiliado):Observable<Afiliado>{
    return this.http.put<Afiliado>(`${this.url+'/modificar'}/${afiliado.id}`,afiliado).pipe(
      map((response:any)=>response.afiliado as Afiliado),
      catchError(e=>{
        console.error(e.error.mensaje)
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e)
      })
    )
  }

  public delete(id:number):Observable<Afiliado>{
    return this.http.delete<Afiliado>(`${this.url+'/eliminar'}/${id}`).pipe(
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e)
      })
    )
  }
}
