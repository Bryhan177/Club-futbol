import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './components/login/login.component';
import { LugarJogoComponent } from './components/lugar-jogo/lugar-jogo.component';



export const routes: Routes = [
  { 
    path: 'home',
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
    path: 'lugar-jogo',
    component: LugarJogoComponent,
  }
  

];
