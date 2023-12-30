import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Otra rutas de la aplicación...
  {
    path: 'app',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: InicioComponent },
      // Otras rutas autenticadas
    ],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección por defecto a la página de inicio de sesión
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
