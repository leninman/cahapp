import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes-app';
  public isAuthenticated:Boolean=false
  constructor(private router: Router,public authService: AuthService) {
    // Realizar la redirección al login
    this.router.navigate(['/login']);
  }

  
}
