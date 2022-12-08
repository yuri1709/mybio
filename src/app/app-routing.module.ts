import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilFormComponent } from './modules/perfil/perfil-form/perfil-form.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  { 
     path: 'pessoas', 
     loadChildren: () => import('./modules/perfil/perfil.module').then( m => m.PerfilModule)
    //path: 'pessoas', component: PerfilListComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'formulario', component: PerfilFormComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
