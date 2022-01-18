import { NgModule } from "@angular/core";
import {ListadoComponent} from "./listado/listado.component";
import {HeroeComponent} from "./heroe/heroe.component";
import {CommonModule} from "@angular/common";

@NgModule({
  // Nos dice los elementos que contiene nuestro módulo
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  //Exorts nos indica lo que será expuesto al resto de la app
  exports: [
    ListadoComponent
  ],
  //Imports nos indica lo necesario
  imports: [
    CommonModule,
  ]
})
export class HeroesModule{}
