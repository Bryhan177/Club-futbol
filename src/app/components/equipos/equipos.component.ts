import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl:'./equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
equipos: any;

}
