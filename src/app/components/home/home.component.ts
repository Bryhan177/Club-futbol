import { Component } from '@angular/core';
import { PartidosComponent } from '../partidos/partidos.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
loregister() {
  this.router.navigate(['/login']);
  console.log('ir a login');
throw new Error('Method not implemented.');
}
  constructor(private router: Router) { }
  vaequipos() {
        this.router.navigate(['/equipos']);
        console.log('ir a equipos');
      }
    }