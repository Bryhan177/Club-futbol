import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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

