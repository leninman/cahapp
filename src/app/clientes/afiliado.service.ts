import { Injectable } from '@angular/core';
import { Afiliado } from './afiliado';
import { of,Observable,map,catchError,throwError} from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AfiliadoService {

  private url:string='http://localhost:8090/afiliado'
  private httpHeaders=new HttpHeaders({'Content-Type':'application-json'})

  constructor(private http:HttpClient,private router:Router) { }

  public getAfiliados():Observable<Afiliado[]>{
        return this.http.get<Afiliado[]>(this.url)
  }

  public createAfiliado(afiliado:Afiliado):Observable<Afiliado>{
    return this.http.post<Afiliado>(this.url,afiliado).pipe(
      map((response:any)=>response.afiliado as Afiliado),
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }

  public getAfiliado(id:number):Observable<Afiliado>{
        return this.http.get<Afiliado>(`${this.url}/${id}`).pipe(
          catchError(e=>{
            this.router.navigate(['/afiliados'])
              console.error(e.error.mensaje)
              swal.fire('Error al consultar el afiliado',e.error.mensaje,'error');
              return throwError(e);
          })
        );
  }

  public updateAfiliado(afiliado:Afiliado):Observable<Afiliado>{
    return this.http.put<Afiliado>(`${this.url}/${afiliado.id}`,afiliado).pipe(
      map((response:any)=>response.afiliado as Afiliado),
      catchError(e=>{
        console.error(e.error.mensaje)
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e)
      })
    )
  }

  public delete(id:number):Observable<Afiliado>{
    return this.http.delete<Afiliado>(`${this.url}/${id}`).pipe(
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e)
      })
    )
  }
}
