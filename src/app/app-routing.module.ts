import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'equipos', loadChildren: () => import('./components/equipos/equipos.module').then(m => m.EquiposModule) },
  { path: 'jugadores', loadChildren: () => import('./components/jugadores/jugadores.module').then(m => m.JugadoresModule) },
  { path: 'calendario', loadChildren: () => import('./components/calendario/calendario.module').then(m => m.CalendarioModule) },
  { path: 'noticias', loadChildren: () => import('./components/noticias/noticias.module').then(m => m.NoticiasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
