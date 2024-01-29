import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { DirectivaforComponent } from './directivafor/directivafor.component';
import { AfiliadoComponent } from './afiliados/afiliado.component';
import { RouterModule,Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormafiliadoComponent } from './afiliados/formafiliado.component';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './login/auth.service';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormusuarioComponent } from './usuarios/usuario/formusuario/formusuario.component';
const routes:Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'directivas',component: DirectivaforComponent},
  {path:'afiliados',component: AfiliadoComponent},
  {path:'usuarios',component: UsuariosComponent},
  {path:'afiliados/formafiliado',component:FormafiliadoComponent},
  {path:'afiliados/formafiliado/:id',component:FormafiliadoComponent},
  {path:'usuarios/usuario/formusuario',component:FormusuarioComponent},
  {path:'usuarios/usuario/formusuario/:id',component:FormusuarioComponent},
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaforComponent,
    AfiliadoComponent,
    FormafiliadoComponent,
    InicioComponent,
    LoginComponent,
    UsuariosComponent,
    FormusuarioComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
