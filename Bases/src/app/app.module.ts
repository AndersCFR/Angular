import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HeroesModule} from "./heroes/heroes.module";
import {ContadorModule} from "./contador/contador.module";

@NgModule({
  // En las desclaraciones van los componentes creados que se van a usar
  declarations: [
    AppComponent,
  ],
  //Módulos que son requeridos
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
