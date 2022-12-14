import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { PerfilListComponent } from './perfil-list/perfil-list.component';
import { PerfilFotoComponent } from './perfil-foto/perfil-foto.component';
import { PerfilFormComponent } from './perfil-form/perfil-form.component';
import { PerfisRoutingModule } from './perfil-routing.module';



@NgModule({
  declarations: [
    PerfilListComponent,
    PerfilFotoComponent,
    PerfilFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfisRoutingModule
  ],
  exports: [
    PerfilFormComponent,
    PerfilListComponent,
    PerfilFotoComponent,
  ]
})
export class PerfilModule { }
