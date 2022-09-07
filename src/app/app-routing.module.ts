import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EquipoComponent } from './componentes/equipo/equipo.component';
import { HomeDarkComponent } from './componentes/home-dark/home-dark.component';
import { HomeComponent } from './componentes/home/home.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'home' 
  },
  {
    path: 'home',
    component: HomeComponent 
  },
  {
    path: 'acerca',
    component: AcercaComponent 
  },
  {
    path: 'contacto',
    component: ContactoComponent 
  },
  {
    path: 'equipo',
    component: EquipoComponent 
  },
  {
    path: 'noticias',
    component: NoticiasComponent 
  },
  {
    path: 'dark',
    component: HomeDarkComponent 
  },
  {
    path: '**',
    component: HomeComponent 
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
