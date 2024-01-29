import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Observable,map,catchError,throwError } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string=environment.apiUrl+'usuarios'
  private httpHeaders=new HttpHeaders({'Content-Type':'application-json'})

  constructor(private http:HttpClient,private router:Router) { }

  public getUsuarios():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url+'/listar')
  }

  public createUsuarioAdmin(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/crear',usuario).pipe(
      map((response:any)=>response.afiliado as Usuario),
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }

  public createUsuario(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.url+'/registrar',usuario).pipe(
      map((response:any)=>response.afiliado as Usuario),
      catchError(e=>{
        swal.fire(e.error.mensaje,e.error.error,'error');
        return throwError(e);
      })
    )
  }

  public getUsuario(id:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url+'/consultar'}/${id}`).pipe(
      catchError(e=>{
        this.router.navigate(['/usuarios'])
          console.error(e.error.mensaje)
          swal.fire('Error al consultar el usuario',e.error.mensaje,'error');
          return throwError(e);
      })
    );
}

public updateUsuario(usuario:Usuario):Observable<Usuario>{
  return this.http.put<Usuario>(`${this.url+'/modificar'}/${usuario.id}`,usuario).pipe(
    map((response:any)=>response.afiliado as Usuario),
    catchError(e=>{
      console.error(e.error.mensaje)
      swal.fire(e.error.mensaje,e.error.error,'error');
      return throwError(e)
    })
  )
}

public delete(id:number):Observable<Usuario>{
  return this.http.delete<Usuario>(`${this.url+'/eliminar'}/${id}`).pipe(
    catchError(e=>{
      swal.fire(e.error.mensaje,e.error.error,'error');
      return throwError(e)
    })
  )
}




}
