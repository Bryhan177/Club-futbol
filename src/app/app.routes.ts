import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './components/login/login.component';
import { LugarJogoComponent } from './components/lugar-jogo/lugar-jogo.component';
import { Error404Component } from './components/error404/error404.component';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'equipos',
    component: EquiposComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'Juegos',
    component: LugarJogoComponent,
  },
  {
    path: '**',
    component: Error404Component,
  }
];
