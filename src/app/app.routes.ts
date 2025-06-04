import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { JugadoresComponent } from './components/jugadores/jugadores.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/resgistro/resgistro.component';

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
    path: 'jugadores',
    component: JugadoresComponent,
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
]
