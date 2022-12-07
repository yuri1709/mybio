import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerfilModule } from './modules/perfil/perfil.module';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
//import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { firebaseConfig } from 'src/environments/enviroment';
import { provideDatabase, getDatabase} from "@angular/fire/database"
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    PerfilModule, 
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
