import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jugadores',
  template: `
    <div class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          <span class="text-blue-600">Nuestros</span> Jugadores
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6">
            <img src="assets/jugadores/jugador1.jpg" alt="Jugador 1" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-semibold mb-2">Juan Pérez</h3>
            <p class="text-gray-600 mb-4">Delantero</p>
            <div class="flex justify-between text-sm text-gray-500">
              <span>Goles: 15</span>
              <span>Partidos: 20</span>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6">
            <img src="assets/jugadores/jugador2.jpg" alt="Jugador 2" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-semibold mb-2">María García</h3>
            <p class="text-gray-600 mb-4">Defensa</p>
            <div class="flex justify-between text-sm text-gray-500">
              <span>Goles: 3</span>
              <span>Partidos: 25</span>
            </div>
          </div>
          <div class="bg-white rounded-xl shadow-lg p-6">
            <img src="assets/jugadores/jugador3.jpg" alt="Jugador 3" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-semibold mb-2">Carlos Rodríguez</h3>
            <p class="text-gray-600 mb-4">Mediocampista</p>
            <div class="flex justify-between text-sm text-gray-500">
              <span>Goles: 7</span>
              <span>Partidos: 22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class JugadoresComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
