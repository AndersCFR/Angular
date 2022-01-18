import {NgModule} from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
  declarations: [
    ContadorComponent
  ],
  //Exorts nos indica lo que será expuesto al resto de la app
  exports: [
    ContadorComponent
  ],
  //Imports nos indica lo necesario
  imports: [
    //CommonModule,
  ]
})
export class ContadorModule{}
