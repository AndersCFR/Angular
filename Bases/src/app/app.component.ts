import { Component } from '@angular/core';

@Component({
  // Selector: es el nombre del componente
  selector: 'app-root',
  // templateUrl: Se especifica si se tiene una parte de HTML
  // template: Permitiría definir un template string
  templateUrl: './app.component.html',
  // Styleurls para especificar si tenemos css para el componente
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  acumular(valor: number){
    this.numero += valor;
  }
}
