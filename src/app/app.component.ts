import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isMenuOpen = false;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {
    
  }
  gojugadores() {
    this.router.navigate(['/jugadores']);
    console.log('ir a jugadores')
}
  vaequipos() {
    this.router.navigate(['/equipos']);
    console.log('ir a equipos')
  }

  hoinicio() {
    this.router.navigate(['/hoinicio']);  
  }
  dicalendario() {
    this.router.navigate(['/calendario']);
    console.log('ir a calendario')
  }
  donoticias() {
    this.router.navigate(['/noticias']);
    console.log('ir a noticias')
  }
}


