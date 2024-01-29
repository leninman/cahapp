import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientes-app';
//public isAuthenticated:Boolean=false
  constructor(private router: Router) {
    // Realizar la redirección al login
    this.router.navigate(['/login']);
  }

  
}
