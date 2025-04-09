import { Component } from '@angular/core';
import { PartidosComponent } from '../partidos/partidos.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PartidosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  

  
}
