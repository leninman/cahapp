import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './login/auth.service';


@Injectable({
    providedIn: 'root',
  })
export class AuthGuard  implements CanActivate{
    constructor(private authService: AuthService,private router: Router) {}

  canActivate(): boolean {
    // Lógica de autenticación aquí
    const isAuthenticated = this.authService.isAuthenticatedUser();

    if (!isAuthenticated) {
      // No autenticado, redirigir al login
      this.router.navigate(['/login']);
      return false;
    }

    // Autenticado, permitir el acceso
    return true;
}
}
